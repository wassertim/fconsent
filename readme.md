# FConsent
FConsent is a simple browser extension that allows you to give automatic consent to cookies on multiple websites. No more clicking on "Accept All" or "Reject All" buttons.
# Integration Tests
## Mac firewall
For avoiding mac firewall window, create a self signed certificate with parameters:
- Identity Type: Self-Signed Root
- Certificate Type: Code Signing

and then run:

```shell
codesign -s Puppeteer -f ./node_modules/puppeteer/.local-chromium/mac-1036745/chrome-mac/Chromium.app --deep
```