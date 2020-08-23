const objects = require('../../pageObjects/objects.page');
const expect = require('chai').expect;

describe('Tips calculate app', () => {
    it('Verifies the app calculates accordingly on Default value', () => {
        objects.amountField.addValue('100');
        objects.calcTipBtn.click();

        let tip = objects.tipAmount.getText();
        console.log(tip);
        expect(tip).equal('$15.00');
    })

    it('Verifies the tip % can be changed', () => {
        objects.settingsBtn.click();
        objects.tipPercSet.clearValue();
        objects.tipPercSet.addValue('10.0');
        objects.saveSettingsBtn.click();

        let newTip = objects.tipPerc.getText();
        console.log(newTip);
        expect(newTip).equal('10.0%')
    })

    it('Verifies the new tip % is accordingly used', () => {
        objects.amountField.addValue('100');
        objects.calcTipBtn.click();

        let tip = objects.tipAmount.getText();
        console.log(tip);
        expect(tip).equal('$10.00');
    })
})
