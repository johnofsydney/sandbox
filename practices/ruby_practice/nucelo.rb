puts "hello ruby"

def nuc string

  tides = ["A", "C", "G", "U", "T"]
  score = 0

  string = string.upcase.split('')
  string.each do |letter|
    if tides.include?(letter)
      score = score + 1
    end

  end
  puts score == 0 ? "None" : score
end

nuc "B"
