#!/usr/bin/python
# The following iterative sequence is defined for the set of positive integers:
#
# n -> n/2 (n is even)
# n -> 3n + 1 (n is odd)
#
# Using the rule above and starting with 13, we generate the following sequence:
#
# 13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
# It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
#
# Which starting number, under one million, produces the longest chain?
#
# NOTE: Once the chain starts the terms are allowed to go above one million.

def rwh_primes(n):
    # http://stackoverflow.com/questions/2068372/fastest-way-to-list-all-primes-below-n-in-python/3035188#3035188
    """ Returns  a list of primes < n """
    sieve = [True] * n
    for i in xrange(3,int(n**0.5)+1,2):
        if sieve[i]:
            sieve[i*i::2*i]=[False]*((n-i*i-1)/(2*i)+1)
    return [2] + [i for i in xrange(3,n,2) if sieve[i]]

def get_sequence(n):
    c = [n]
    while n > 1:
        if n % 2 == 0:
            n = n/2
        else:
            n = (3 * n) + 1
        c.append(n)

    return c

def get_factors(n, primes):
    f = []
    while n not in primes:
        for p in primes:
            if n % p == 0:
                n = n / p
                f.append(p)
    return p

##
# Prime method
##
# for i in rwh_primes(1000000):
#     seq     = get_sequence(i)
#     seq_len = len(seq)
#
#     if seq_len > max_seq_len:
#         max_seq     = seq
#         max_seq_len = seq_len
#
# print max_seq

##
# 2-1000 printout
##
n = 1000000
primes = rwh_primes(n)
for i in n:
    max_seq     = []
    max_seq_len = len(max_seq)
    max_seq_num = 1

    for j in range(2, i):
        seq     = get_sequence(j)
        seq_len = len(seq)

        if seq_len >= max_seq_len:
            max_seq     = seq
            max_seq_len = seq_len
            max_seq_num = j

    print i, 'MAX:', "(%i)" % (max_seq_len), max_seq_num, get_factors(max_seq_num, rwh_primes)
