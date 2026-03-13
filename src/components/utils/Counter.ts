
const counters: NodeListOf<HTMLElement> = document.querySelectorAll(".counter");
const speed: number = 200;

// 2. Add types for the observer callback arguments
const startCounting = (
  entries: IntersectionObserverEntry[], 
  observer: IntersectionObserver
): void => {
  entries.forEach((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      // 3. Cast the target to an HTMLElement
      const target = entry.target as HTMLElement;
      
      const updateCount = (): void => {
        // 4. Handle the possibility that getAttribute returns null
        const targetAttr = target.getAttribute("data-target");
        const destination: number = targetAttr ? +targetAttr : 0;
        
        // 5. Convert innerText to a number
        const count: number = +target.innerText;

        const increment: number = destination / speed;

        if (count < destination) {
          // 6. innerText expects a string, so we must add .toString()
          target.innerText = Math.ceil(count + increment).toString();
          setTimeout(updateCount, 20);
        } else {
          target.innerText = destination.toString();
        }
      };

      updateCount();

      // Stop observing once the animation finishes
      observer.unobserve(target);
    }
  });
};

const observer = new IntersectionObserver(startCounting, {
  threshold: 0.5,
});

// 7. Type the counter in the forEach loop
counters.forEach((counter: HTMLElement) => observer.observe(counter));