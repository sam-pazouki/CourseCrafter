module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", 
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(axios|@chakra-ui|your-other-deps)/)"],

  moduleNameMapper: {
    "^@chakra-ui/(.*)": "<rootDir>/node_modules/@chakra-ui/$1", 
    "\\.(css|scss)$": "identity-obj-proxy" 
  },
  testEnvironment: "jsdom", 
};
