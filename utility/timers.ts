const TRecenzii = 1000 * 60 * 60 * 24 * 3;


if (localStorage.getItem('LimitaTrimitereRecenzii')) {
    let timerRecenzii;

    if (!timerRecenzii) {
        timerRecenzii = setTimeout(() => {
            localStorage.removeItem('LimitaTrimitereRecenzii')
        }, TRecenzii)
    }
}