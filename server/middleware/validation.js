const { body, validationResult } = require("express-validator");

const validate = (schema) => {
    return async (req, res, next) => {
        await Promise.all(schema.map((rule) => rule.run(req)));

        const result = validationResult(req);
        if (result.isEmpty()) {
            return next();
        }

        const errors = result.array();
        return res.status(400).send({ status: "FAILED", data: errors });
    };
};

const postRules = [
    body("title").notEmpty().withMessage("Title is required"),
    body("author").notEmpty().withMessage("Author is required"),
    body("body").isArray({ min: 1 }).withMessage("Body is required"),
    body("body.*.type").notEmpty().withMessage("Type is required"),
    body("body.*.content").notEmpty().withMessage("Content is required"),
    body("topics").isArray({ min: 1 }).withMessage("At least one topic is required"),
];

const topicRules = [
    body("name").isLength({ max: 20 }).withMessage("Tag can't exceed 20 chars"),
    body("name").notEmpty().withMessage("Tag can't be empty"),
];

module.exports = {
    validate,
    postRules,
    topicRules,
};
