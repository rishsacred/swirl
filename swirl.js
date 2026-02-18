function showMessage() {
    const sound = document.getElementById("clickSound");
    sound.currentTime = 0; // restart sound each click
    sound.play();
}
