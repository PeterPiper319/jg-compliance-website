# PHASE 09 MASTER LOG: Functional Mobile Navigation
Status: COMPLETED

## OBJECTIVE
Replace the static "Menu" link with a functional, JavaScript-driven hamburger menu that toggles a navigation dropdown on mobile devices.

## MICRO-LAYER SEQUENCE
| ID | File | Function | Status |
| :--- | :--- | :--- | :--- |
| 09-01 | src/components/Navbar.astro | **Logic/UI:** Implement Hamburger SVG, Hidden Menu Container, and Toggle Script. | COMPLETED |

## VALIDATION GATES
- [x] 09-01 Locked (Phase Completion)
MICRO-LAYER 09-01: The Mobile Menu Implementation
We will perform a "surgical replacement" of the Navbar.astro file.

Remove: The <a href="/contact">Menu &rarr;</a> link.

Add: A <button> with a Hamburger SVG icon.

Add: A hidden div container with the navigation links stacked vertically.

Add: A <script> block to toggle the hidden class when the button is clicked.

SYSTEM COMMAND: EXECUTE MICRO-FILE 09-01

Master Log Entry: 09-01

File: src/components/Navbar.astro

Purpose: Create a functional mobile navigation drawer.

Instruction: Replace the entire content of src/components/Navbar.astro with the following code.

Code snippet
---
// src/components/Navbar.astro
---

<nav class="bg-white border-b border-gray-100 sticky top-0 z-50">
  <div class="container mx-auto px-4 h-20 flex items-center justify-between relative">
    
    <a href="/" class="flex items-center gap-3">
      <img src="/logo1.png" alt="Logo 1" class="h-12 w-auto object-contain" />
      <img src="/logo2.png" alt="Logo 2" class="h-12 w-auto object-contain" />
    </a>

    <div class="hidden md:flex items-center space-x-8">
      <a href="/" class="text-sm font-medium text-brand-grey hover:text-brand-blue transition-colors">Home</a>
      <a href="/services" class="text-sm font-medium text-brand-grey hover:text-brand-blue transition-colors">Services</a>
      
      <a href="/contact" class="bg-brand-blue text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-brand-blue/90 transition-colors shadow-sm">
        Contact Us
      </a>
    </div>

    <button id="mobile-menu-btn" class="md:hidden text-brand-blue focus:outline-none p-2" aria-label="Toggle Menu">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  <div id="mobile-menu" class="hidden md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg py-6 px-6 flex-col gap-6 z-40">
      <a href="/" class="block text-lg font-medium text-brand-grey hover:text-brand-blue">Home</a>
      <a href="/services" class="block text-lg font-medium text-brand-grey hover:text-brand-blue">Services</a>
      <hr class="border-gray-100" />
      <a href="/contact" class="block w-full bg-brand-blue text-white px-5 py-4 rounded-lg text-lg font-bold text-center hover:bg-brand-blue/90 transition-colors">
        Contact Us
      </a>
  </div>
</nav>

<script>
  // Toggles the mobile menu visibility
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      menu.classList.toggle('flex'); // Switch to flexbox for vertical stacking
    });
  }
</script>