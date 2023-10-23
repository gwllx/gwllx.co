window.onload = function() {
    const elems = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
    const lunarCycle_ms = 2551442876.8992; // Lunar cycle in ms (~29.53059 days)
    const newMoon_ms = 1605416820000; // Recent new moon: 11 Nov, 2020

    const offset = lunarCycle_ms / (4 * elems.length);
    const phase_ms = Date.now() - newMoon_ms - offset;
    const phase_pc = phase_ms % lunarCycle_ms / lunarCycle_ms;
    const index = Math.round(elems.length * phase_pc) % elems.length;

    const content = document.getElementsByClassName("moon")[0];
    content.innerHTML = elems[index];

    var toggle = false;
    content.onclick = function() {
        toggle = !toggle;
        content.innerHTML = toggle ? "👽" : elems[index];        
    }
};
