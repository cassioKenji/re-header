# re:header
A simple Google Chrome extension to set request headers for test automation

# the:problem
If you're using Chrome driver and need to set custom headers for your scripts.

# the:solution
Load this extension along with your driver:

```
Capybara.register_driver :selenium do |app|
  options = Selenium::WebDriver::Chrome::Options.new(args: ['user-data-dir=user_dir'], extensions: ['extension.crx'])
  Capybara::Selenium::Driver.new(app, :browser => :chrome, options: options)
end
```
