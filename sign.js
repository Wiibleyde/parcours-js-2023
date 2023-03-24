function sign(number) {
    switch (number) {
        case 0:
            return 0;
        case number > 0:
            return 1;
        case number < 0:
            return -1;
    }
}