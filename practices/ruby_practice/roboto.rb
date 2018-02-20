puts "hi ruby"
require 'pry'

class Robot

  def initialize
    @name = make_name
    @instruction_count = 0
    @birth = Time.now
    @booted = Time.now
  end

  def make_name
    letterRange = ("A" .. "Z").to_a.sample(3).join()
    numberRange = (0 .. 9).to_a.sample(2).join()
    letterRange + numberRange
  end

  def name
    @instruction_count += 1
    @name
  end

  def instruction_count
    @instruction_count += 1
    @instruction_count
  end

  def reset
    @name = make_name
    @booted = Time.now
  end

  def timers
    age = Time.now - @birth
    waked = Time.now - @booted
    "Robot #{@name}. Time since birth: #{age}, time since reboot #{waked}"
  end


end

r1 = Robot.new
r2 = Robot.new

p r1.name
p r1.instruction_count
p r1.name
p r1.instruction_count
p r1.name
p r1.instruction_count
p r2.name
p r2.instruction_count

r1.reset
p r1.name
p r1.instruction_count

p r1.timers
p r2.timers

binding.pry
