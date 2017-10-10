# re:header
A simple Google Chrome extension to set request headers for test automation

# the:problem
If you're using Chrome driver and need to set custom headers for your scripts.

# the:solution
Load this extension along with your driver:

```ruby
# .rb
Capybara.register_driver :selenium do |app|
  options = Selenium::WebDriver::Chrome::Options.new(extensions: ['extension.crx'])
  Capybara::Selenium::Driver.new(app, :browser => :chrome, options: options)
end
```

# using:it

For now you'll need to edit background.js:

```javascript
/*javascript*/
var headers = details.requestHeaders, blockingResponse = {};
headers.push( {name: 'X-Custom-Header', value: 'x-custom-value'} );
```
