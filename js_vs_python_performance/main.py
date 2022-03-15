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


# Test 1 Add two numbers
time_list_1 = []

for _ in range(1000):
    start = timeit.default_timer()

    for _ in range(10000):
        add_nums(1, 2)

    exec_time = timeit.default_timer() - start
    time_list_1.append(exec_time)

print('Test 1:', max(time_list_1))


# Test 2 Power the number
time_list_2 = []

for _ in range(1000):
    start = timeit.default_timer()

    for _ in range(10000):
        pow_nums(123, 123)

    exec_time = timeit.default_timer() - start
    time_list_2.append(exec_time)

print('Test 2:', max(time_list_2))


# Test 3 Generate array with random numbers from 0 to 10
time_list_3 = []

for _ in range(1000):
    start = timeit.default_timer()

    generate_list()

    exec_time = timeit.default_timer() - start
    time_list_3.append(exec_time)

print('Test 3:', max(time_list_3))


# Test 4 Sort array with random numbers from 0 to 10 with "Quick sort" algorithm
time_list_4 = []
random_num_list = generate_list()

for _ in range(1000):
    start = timeit.default_timer()

    quick_sort(random_num_list)

    exec_time = timeit.default_timer() - start
    time_list_4.append(exec_time)

print('Test 4:', max(time_list_4))

