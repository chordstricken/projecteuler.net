#!/usr/bin/python
# Problem 6

max = 100

num1 = 0
num2 = sum(range(1, max + 1)) ** 2

for i in range(1, max + 1):
    num1 += i ** 2

print num1, num2, num2 - num1
