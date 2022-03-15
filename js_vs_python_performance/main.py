import timeit
import random


def add_nums(a, b):
    return a + b


def pow_nums(a, b):
    return a ** b


def generate_list():
    return [random.randint(0, 10) for _ in range(10000)]


def quick_sort(arr):
    less = []
    equal = []
    greater = []

    if len(arr) > 1:
        pivot = arr[0]
        for x in arr:
            if x < pivot:
                less.append(x)
            elif x == pivot:
                equal.append(x)
            elif x > pivot:
                greater.append(x)
        return quick_sort(less) + equal + quick_sort(greater)
    else:
        return arr


# Test 1 add two numbers
start = timeit.default_timer()
for i in range(10000):
    add_nums(1, 2)
print(timeit.default_timer() - start)

# Test 2 Power the number
start = timeit.default_timer()
for i in range(10000):
    pow_nums(123, 123)
print(timeit.default_timer() - start)

# Test 3 Generate array with random numbers from 0 to 10
start = timeit.default_timer()
generate_list()
print(timeit.default_timer() - start)

# Test 4 Sort array with random numbers from 0 to 10 with "Quick sort" algorithm
random_num_list = generate_list()
start = timeit.default_timer()
quick_sort(random_num_list)
print(timeit.default_timer() - start)
