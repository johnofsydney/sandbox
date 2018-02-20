require 'pry'
p "hello ruby"

class Roman

  def initialize number
    @number = number
    @numerals = ""
    convert number
  end

  def convert number
    if (number >= 1000)
      @numerals = @numerals + "M"
      number = number - 1000
      convert number
    elsif (number >= 900)
      @numerals = @numerals + "CM"
      number = number - 900
      convert number
    elsif (number >= 500)
      @numerals = @numerals + "D"
      number = number - 500
      convert number
    elsif (number >= 400)
      @numerals = @numerals + "CD"
      number = number - 400
      convert number
    elsif (number >= 100)
      @numerals = @numerals + "C"
      number = number - 100
      convert number
    elsif (number >= 90)
      @numerals = @numerals + "XC"
      number = number - 90
      convert number
    elsif (number >= 50)
      @numerals = @numerals + "L"
      number = number - 50
      convert number
    elsif (number >= 40)
      @numerals = @numerals + "XL"
      number = number - 40
      convert number
    elsif (number >= 10)
      @numerals = @numerals + "X"
      number = number - 10
      convert number
    elsif (number >= 9)
      @numerals = @numerals + "IX"
      number = number - 9
      convert number
    elsif (number >= 5)
      @numerals = @numerals + "V"
      number = number - 5
      convert number
    elsif (number >= 4)
      @numerals = @numerals + "IV"
      number = number - 4
      convert number
    elsif (number >= 1)
      @numerals = @numerals + "I"
      number = number - 1
      convert number
    end
  end



  def details
    p @number
    p @numerals
  end

end

r1 = Roman.new(1990)
r1.details

r2 = Roman.new(2008)
r2.details
