puts "hello scrabble"




def scrabble word
  values = {
    1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2 => ["D", "G"],
    3 => ["B", "C", "M", "P"],
    4 => ["F", "H", "V", "W", "Y"],
    5 => ["K"],
    8 => ["J", "X"],
    10 => ["Q", "Z"]
  }
  score = 0


  # puts word

  word.upcase.split('').each do |letter|
    # puts letter

    values.each do | key, value |
      if value.include?(letter)
        score = score + key
      end

    end
  end

  puts "Your word #{word} and the scpre is #{score}"

end

puts "enter word"
input = gets.chomp
scrabble input
