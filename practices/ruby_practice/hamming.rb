puts "hi ruby"

def hamming string1, string2
  if string1.length != string2.length
    puts "mismatch"
    return false
  end

  distance = 0

  string1 = string1.upcase.split('')
  string2 = string2.upcase.split('')

  string1.each_with_index do |letter, i|
    if letter != string2[i]
      # puts letter
      # puts i
      distance = distance + 1
    end
  end

  puts distance



end


hamming "XBCDEFG", "ABCDDDD"
