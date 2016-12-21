from math import factorial

candidates = [i for i in range(1,10)]
perm_elem = []
index = factorial(9) - 1

for j in range(8,-1,-1):
    print j
    print(index, factorial(j))
    n = int(index/factorial(j))
    perm_elem.append(str(candidates[n]))
    index -= n*factorial(j)
    del candidates[n]

solution = ''.join(perm_elem)
print solution
