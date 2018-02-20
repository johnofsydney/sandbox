p "hello ruby"

require 'pry'


class Atbash

  def initialize string
    @alpha = ("A".."Z").to_a
    @rever = @alpha.reverse
    @string = string
    @result = ""
    encode
  end


  def encode
    @string.upcase.split('').each do |letter|
      i = @alpha.index letter
      @result = @result + @rever[i]
    end

    p @result
  end



end


coded = Atbash.new("TEST")
decoded = Atbash.new("gvhg")
