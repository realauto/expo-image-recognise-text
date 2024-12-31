import ExpoModulesCore
import Vision
import UIKit

public class ExpoImageRecogniseTextModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoImageRecogniseText")

    Constants([
      "PI": Double.pi
    ])

    Events("onChange")

    Function("hello") {
      return "Hello world! 👋"
    }

    AsyncFunction("setValueAsync") { (value: String) in
      // Send an event to JavaScript.
      self.sendEvent("onChange", [
        "value": value
      ])
    }

    // No default argument in the closure. We can handle it manually in the body.
    AsyncFunction("recognizeTextFromBase64Async") { (base64Image: String, language: String?) -> String in
      // 1. Provide a fallback language if user doesn’t pass any language param
      let chosenLanguage = (language?.isEmpty == false) ? language! : "en"

      // 2. Strip the 'data:image...' prefix if present
      let strippedBase64 = base64Image.replacingOccurrences(
        of: "^data:image/[a-zA-Z]+;base64,",
        with: "",
        options: .regularExpression
      )

      // 3. Decode into Data and convert to CGImage
      guard
        let imageData = Data(base64Encoded: strippedBase64),
        let uiImage = UIImage(data: imageData),
        let cgImage = uiImage.cgImage
      else {
        // If decode fails, return empty or throw
        self.sendEvent("onChange", ["value": ""])
        return ""
      }

      // 4. Prepare a Vision request (requires iOS 13+)
      let request = VNRecognizeTextRequest()
      if #available(iOS 13.0, *) {
        request.recognitionLevel = .accurate
      } else {
        request.recognitionLevel = .fast
      }
      request.usesLanguageCorrection = true
      request.recognitionLanguages = [chosenLanguage]

      // 5. Perform the request (synchronously for simplicity)
      let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
      do {
        try handler.perform([request])
      } catch {
        self.sendEvent("onChange", ["value": ""])
        return ""
      }

      // 6. Gather recognized text
      guard let observations = request.results as? [VNRecognizedTextObservation] else {
        self.sendEvent("onChange", ["value": "no text recognized"])
        return ""
      }

      let recognizedStrings = observations.compactMap {
        $0.topCandidates(1).first?.string
      }
      let fullText = recognizedStrings.joined(separator: "\n")

      // 7. Send the recognized text back as an event, and return it
      self.sendEvent("onChange", ["value": fullText])
      return fullText
    }
  }
}