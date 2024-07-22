/** Generated from: src/features/login.feature */
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe("User login", () => {

  test("Successful login", async ({ Given, login, When, And, Then, dashboard }) => {
    await Given("I navigate to the login page", null, { login });
    await When("I enter my email and password", null, { login });
    await And("I click the login button", null, { login });
    await Then("I should be logged in successfully", null, { dashboard });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("src/features/login.feature"),
});

const testMetaMap = {
  "Successful login": {"pickleLocation":"3:3"},
};