document.addEventListener('DOMContentLoaded', () => {
  const fab = document.getElementById('fab');
  const bottomSheet = document.getElementById('bottom-sheet');
  const inviteForm = document.getElementById('invite-form');
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const phoneNumberInput = document.getElementById('phone-number');
  const referralCodeDisplay = document.getElementById('generated-referral-code');
  const referralCodeSection = document.getElementById('generated-code');
  const copyCodeButton = document.getElementById('copy-code');
  const shareCodeButton = document.getElementById('share-code');

  // Toggle bottom sheet
  fab.addEventListener('click', () => {
    bottomSheet.classList.toggle('open');
  });

  // Validate form
  invite
