const { body, validationResult } = require("express-validator");

const validate = (schema) => {
    return async (req, res, next) => {
        await Promise.all(schema.map((rule) => rule.run(req)));

        const result = validationResult(req);
        if (result.isEmpty()) {
            return next();
        }

        const errors = result.array();
        return res.send(errors);
    };
};

const postRules = [body("title").notEmpty()];

module.exports = {
    validate,
    postRules,
};
