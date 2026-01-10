(function() {
    function protect() {
        window.location.href = "about:blank";
    }
    
    // Debugger detection - checks if DevTools is pausing code
    setInterval(function() {
        const start = performance.now();
        debugger;
        const end = performance.now();
        
        if (end - start > 100) {
            protect();
        }
    }, 1000);
    
    // Window size detection - checks if DevTools changed window size
    window.addEventListener('resize', function() {
        if ((window.outerHeight - window.innerHeight) > 200 || 
            (window.outerWidth - window.innerWidth) > 200) {
            protect();
        }
    });
})();