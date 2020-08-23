class Objects {
  /**
   * Define Elements
   */
  get amountField() {return $('//hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.EditText')};
  get calcTipBtn() {return $('//hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.Button')};
  get tipAmount() {return $('//hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.TextView[4]')};
  get settingsBtn() {return $('//android.widget.TextView[@content-desc="Settings"]')};
  get tipPercSet() {return $('/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.EditText')};
  get saveSettingsBtn() {return $('//hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.Button')};
  get tipPerc() {return $('//hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.TextView[2]')};
}
module.exports = new Objects();
