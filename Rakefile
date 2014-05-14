#!/usr/bin/env rake
begin
  require 'bundler/setup'
rescue LoadError
  puts 'You must `gem install bundler` and `bundle install` to run rake tasks'
end

require "white_album/engines"

APP_RAKEFILE = File.expand_path("../spec/dummy/Rakefile", __FILE__)
if File.exists? APP_RAKEFILE
  load "rails/tasks/engine.rake"
end

Dir[File.join(File.dirname(__FILE__), 'tasks/**/*.rake')].each {|f| load f }

require 'rspec/core'
require 'rspec/core/rake_task'

desc "Run all specs in spec directory (excluding plugin specs)"
RSpec::Core::RakeTask.new(:spec)

task default: :spec

desc "Run the javascript specs"
task teaspoon: "app:teaspoon"
