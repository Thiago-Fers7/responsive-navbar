const Modal = {
    toggle: document.querySelector('div.toggle'),

    menuToggle() {
        this.toggle.classList.toggle('active')
    },
    
    closeMenuToggle() {
        const active = this.toggle.classList[1] == 'active'
        if (active) this.menuToggle()
    }
}