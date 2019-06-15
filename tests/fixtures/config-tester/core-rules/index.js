const rules = require("../../../../lib/rules");

module.exports = {
    rules: Array.from(rules).reduce((rules, [ruleId, rule]) => {
        if (!rule.meta.deprecated) {
            rules[ruleId] = "error"
        }
        return rules
    }, {})
}