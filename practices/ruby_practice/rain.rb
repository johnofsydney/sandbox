puts "hello ruby"

def plonger num
  answer = ""

  if (num % 3 == 0)
    answer = answer + "pling"
  end
  if (num % 5 == 0)
    answer = answer + "plang"
  end
  if (num % 7 == 0)
    answer = answer + "plong"
  end

  if (( num % 3 != 0) && ( num % 5 != 0) && ( num % 7 != 0))
    answer = num.to_s
  end


  return answer


end

puts plonger 28
puts plonger 1755
puts plonger 34
