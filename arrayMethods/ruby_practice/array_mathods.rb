require "pry"

a = [1,2,3,4,5]
b = [2,3,4,5,6]

def msr arr
  return "bill" if arr.any? do |e|
    e == 1
  end

  arr
  .map { |e| e ** 2 }
  .select { |e| e > 10 }
  .reduce { |acc, e| acc + e }
end

p "msr a"
p msr a
p "msr b"
p msr b

def smr arr
  return "bill" if arr.any? do |e|
    e == 1
  end

  arr
  .select { |e| e > 10 }
  .map { |e| e ** 2 }
  .reduce { |acc, e| acc + e }
end

p "smr a"
p smr a
p "smr b"
p smr b


def msun arr
  return "bill" if arr.any? do |e|
    e == 1
  end

  arr
  .select { |e| e > 10 }
  .map { |e| e ** 2 }
  .push ["some", "words", "array", [true, false], "jesse"]
  .flatten
  .last
  .last

end

p "msun a"
# p msun a
p "msun b"
# p msun b

binding.pry
