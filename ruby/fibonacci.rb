def fibonacci(num)
  return num if num < 2

  last_two = [0, 1]

  (num - 1).times do
    sum = last_two[0] + last_two[1]
    last_two = [last_two[1], sum]
  end

  last_two[1]
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
