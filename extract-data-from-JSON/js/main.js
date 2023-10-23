// parse json data
const milestoneData = JSON.parse(data).data;

// Load course milestones data into the DOM
function loadMilestones() {
  const milestones = document.querySelector('.milestones');
  milestones.innerHTML = milestoneData.map(milestone => {
    return `
      <div class="milestone border-b" id="${milestone._id}">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" onclick="markMilestone(this, '${milestone._id}')"/></div>
          <div onclick="openMileStone(this, '${milestone._id}')">
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
          ${milestone.modules.map(module => {
            return `<div class="module border-b">
              <p>${module.name}</p>
            </div>`;
          }).join("")}
        </div>
      </div>`;
  }).join("");
}

// Open milestone
function openMileStone(mileStoneElements, id) {
  const currentPanel = mileStoneElements.parentNode.nextElementSibling;
  const shownPanel = document.querySelector('.show');
  const active = document.querySelector('.active');

  // Check previous class is active or not
  if (active && !mileStoneElements.classList.contains('active')) {
    active.classList.remove('active');
  }
  mileStoneElements.classList.toggle('active');

  // Check previous class is active or not
  if (!currentPanel.classList.contains("show") && shownPanel) {
    shownPanel.classList.remove("show");
  }
  currentPanel.classList.toggle('show');

  showMilestone(id);
}

// Show milestone details
function showMilestone(id) {
  const milestoneImage = document.querySelector('.milestoneImage');
  const name = document.querySelector('.title');
  const details = document.querySelector('.details');

  // Get the data from JSON
  milestoneImage.style.opacity = 0;
  name.innerText = milestoneData.find(milestone => milestone._id === id).name;
  details.innerText = milestoneData.find(milestone => milestone._id === id).description;
  milestoneImage.src = milestoneData.find(milestone => milestone._id === id).image;
}

// Listen for hero image load
const milestoneImage = document.querySelector('.milestoneImage');
milestoneImage.addEventListener('load', () => {
  milestoneImage.style.opacity = 1;
});

// Mark milestone as done
function markMilestone(checkbox, id) {
  const doneList = document.querySelector('.doneList');
  const milestoneList = document.querySelector('.milestones');
  const item = document.getElementById(id);
  if (checkbox.checked) {
    // Mark as done
    milestoneList.removeChild(item);
    doneList.appendChild(item);
  } else {
    // Mark as undone
    doneList.removeChild(item);
    milestoneList.appendChild(item);
  }
}

loadMilestones();
