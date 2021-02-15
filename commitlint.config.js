module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["wip", "fix", "debug", "close"]],
  },
};
