# re:header
A simple Google Chrome extension to set request headers for test automation


```
Capybara.register_driver :selenium do |app|
  options = Selenium::WebDriver::Chrome::Options.new(args: ['user-data-dir=user_dir'], extensions: ['extension.crx'])
  Capybara::Selenium::Driver.new(app, :browser => :chrome, options: options)
end
```
