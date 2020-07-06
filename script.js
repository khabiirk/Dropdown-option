function toggle(b, options) {
    b.onmouseover = function() { options.style.display = 'block' };
    b.onmouseout = function() { options.style.display = 'none' };
}

export default toggle;