import BudgetFlow
import Language.UHC.JScript.ECMA.String

foreign import js "document.write"
  documentWrite :: JSString -> IO()

main = documentWrite (stringToJSString (show sampleGraph))
