const mainContainer = document.createElement('div');
  mainContainer.classList.add('gmail-project__coverage-main');
  const controllerDiv = document.createElement('div');

  controllerDiv.classList.add('gmail-project__coverage-main-controller');
  controllerDiv.innerHTML = `
  <input class="gmail-project__coverage-main-controller-check" type="checkbox"/>
  <i class="gmail-project__coverage-main-controller-down fa-solid fa-caret-down"></i>
  <i class="gmail-project__coverage-main-controller-refresh fa-solid fa-rotate-right"></i>
  <i class="gmail-project__coverage-main-controller-other fa-solid fa-ellipsis-vertical"></i>
  <i class="gmail-project__coverage-main-controller-trash fa-solid fa-trash"></i>
  <i class="gmail-project__coverage-main-controller-open fa-solid fa-envelope-open"></i>
  <div class="gmail-project__coverage-main-controller-interval">
    <p class="gmail-project__coverage-main-controller-interval-text">1-16 of 16</p>
    <i class="gmail-project__coverage-main-controller-interval-left fa-solid fa-chevron-left"></i>
    <i class="gmail-project__coverage-main-controller-interval-right fa-solid fa-chevron-right"></i>
  </div>
`;

const selectAllCheckbox = controllerDiv.querySelector('.gmail-project__coverage-main-controller-check');
const deleteIcon = controllerDiv.querySelector('.gmail-project__coverage-main-controller-trash');
const markReadIcon = controllerDiv.querySelector('.gmail-project__coverage-main-controller-open');
let allRead = false;

const updateMailCounter = () => {
  const mailCounter = controllerDiv.querySelector('.gmail-project__coverage-main-controller-interval-text');
  const totalMails = currentMails.length; // Toplam mail sayısı
  mailCounter.textContent = `1-${totalMails} of ${totalMails}`; // 1-10 of 10
};

// Tüm mailleri seç veya seçme
selectAllCheckbox.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  const mailCheckboxes = mailsContainer.querySelectorAll('.gmail-project__coverage-main-mail-check'); //maillerin üzerindeki checkbox

  mailCheckboxes.forEach((checkbox) => {
    checkbox.checked = isChecked;
  });

  deleteIcon.style.display = isChecked ? 'inline' : 'none';
  markReadIcon.style.display = isChecked ? 'inline' : 'none';
});

// seçili mailleri sil
deleteIcon.addEventListener('click', () => {
  const mailCheckboxes = mailsContainer.querySelectorAll('.gmail-project__coverage-main-mail-check:checked');

  mailCheckboxes.forEach((checkbox) => {
    const mailIndex = checkbox.closest('.gmail-project__coverage-main-mail').dataset.index;
    currentMails[mailIndex].deleted = true;
    currentMails[mailIndex].starred = false;
    deletedMails.push(currentMails[mailIndex]);
  });

  currentMails = currentMails.filter((mail) => !mail.deleted);
  renderMails();
  updateMailCounter();

  selectAllCheckbox.checked = false;
  deleteIcon.style.display = 'none'; 
  markReadIcon.style.display = 'none';
});

// seçili mailleri okundu/okunmadı yapma
markReadIcon.addEventListener('click', () => {
  const mailCheckboxes = mailsContainer.querySelectorAll('.gmail-project__coverage-main-mail-check:checked');

  mailCheckboxes.forEach((checkbox) => {
    const mailIndex = checkbox.closest('.gmail-project__coverage-main-mail').dataset.index;
    currentMails[mailIndex].read = !allRead; 
  });

  allRead = !allRead;
  renderMails();

  selectAllCheckbox.checked = false;
  deleteIcon.style.display = 'none'; 
  markReadIcon.style.display = 'none';
});

  const starredMails = [];
  const inboxMails = [];
  const sentMails = [];
  const deletedMails = [];
  const mailCategories = {
    Primary: [
      {
        sender: 'Acme Inc.',
        detail: 'Insights: The latest in industrial equipment and tools',
        date: 'Feb, 26',
        starred: false,
        deleted: false,
        read: false,
        body: 'This is the detailed body of the email from Acme Inc.',
        email: 'acme2233',
      },
      {
        sender: 'Travel Tales',
        detail: 'Our latest Adventures and Destinations',
        date: 'March, 26',
        starred: false,
        deleted: false,
        read: false,
        body: 'Travel stories and destinations in detail.',
        email: 'travel6695',
      },
      {
        sender: 'Delta Enterprises',
        detail: 'Delta Weekly News: Learn about important safety tips before you fly!',
        date: 'Jan, 26',
        starred: false,
        deleted: false,
        read: true,
        body: 'Safety tips and updates from Delta Enterprises.',
        email: 'delta2879',
      },
    ],
    Promotions: [
      {
        sender: 'Promotion Inc.',
        detail: 'New deals on equipment',
        date: 'Apr, 5',
        starred: false,
        deleted: false,
        read: false,
        body: 'Get 50% off on selected equipment.',
        email: 'promo123',
      },
      {
        sender: 'Sales Corp.',
        detail: 'Upcoming sales event',
        date: 'Mar, 15',
        starred: false,
        deleted: false,
        read: true,
        body: 'Join our sales event for exclusive deals.',
        email: 'salescorp',
      },
      {
        sender: 'Discount Offers',
        detail: 'Limited-time discounts',
        date: 'Mar, 20',
        starred: false,
        deleted: false,
        read: true,
        body: 'Don’t miss our limited-time discounts.',
        email: 'offers123',
      },
    ],
    Social: [
      {
        sender: 'Community Forum',
        detail: 'New discussions in your favorite groups',
        date: 'Apr, 1',
        starred: false,
        deleted: false,
        read: false,
        body: 'Check out new discussions on our forum.',
        email: 'community',
      },
      {
        sender: 'Social Updates',
        detail: 'Your friends shared new posts',
        date: 'Apr, 3',
        starred: false,
        deleted: false,
        read: false,
        body: 'See what your friends are sharing.',
        email: 'social',
      },
      {
        sender: 'Event Invites',
        detail: 'You have been invited to an event',
        date: 'Mar, 25',
        starred: false,
        deleted: false,
        read: true,
        body: 'Join us for the upcoming event!',
        email: 'events',
      },
    ],
  };

  let currentMails = mailCategories['Primary'];
  const mailsContainer = document.createElement('table');
  mailsContainer.classList.add('gmail-project__coverage-main-mail-table');
  const renderMails = (filter = {}) => {
    mailsContainer.innerHTML = '';
    currentMails
      .filter((mail) => {
        if (filter.starred !== undefined) return mail.starred === filter.starred;
        if (filter.deleted !== undefined) return mail.deleted === filter.deleted;
        return !mail.deleted;
      })
      .forEach((mail, index) => { 
        const mailDiv = document.createElement('tr');
        mailDiv.classList.add('gmail-project__coverage-main-mail');
        mailDiv.dataset.index = index;
  
        const backgroundColor = mail.read ? '#F2F5FC' : '#FFFFFF';
        mailDiv.style.backgroundColor = backgroundColor;
        mailDiv.classList.add(mail.read ? 'read' : 'unread');
  
        mailDiv.innerHTML = `
          <i class="gmail-project__coverage-main-mail-vertical fa-solid fa-grip-vertical"></i>
          <input class="gmail-project__coverage-main-mail-check" type="checkbox" />
          <i class="gmail-project__coverage-main-mail-star ${mail.starred ? 'fa-solid' : 'fa-regular'} fa-star fa-sm"></i>
          <div class="gmail-project__coverage-main-mail-user">
          <div class="gmail-project__coverage-main-mail-user-inner">
          <td class="gmail-project__coverage-main-mail-user-sender">${mail.sender}</td>
          <td class="gmail-project__coverage-main-mail-user-detail">${mail.detail}</td>
          </div>
          <td class="gmail-project__coverage-main-mail-user-date">${mail.date}</td>
          </div>
          <div class="gmail-project__coverage-main-mail-icons" background-color: ${backgroundColor};">
            <i class="gmail-project__coverage-main-mail-archive fa-solid fa-archive"></i>
            <i class="gmail-project__coverage-main-mail-trash fa-solid fa-trash"></i>
            <i class="gmail-project__coverage-main-mail-open fa-solid fa-envelope-open"></i>
            <i class="gmail-project__coverage-main-mail-clock fa-solid fa-clock"></i>
          </div>
        `;
  
        mailsContainer.appendChild(mailDiv); //e-postaları listelemek için oluşturulan öğeyi doma ekler
        updateMailCounter();
  
        // Mailin okunurluk durumunu değiştirme
        mailDiv.querySelector('.gmail-project__coverage-main-mail-open').addEventListener('click', (e) => {
          e.stopPropagation(); // parent elementleri etkilemesini engeller
          mail.read = !mail.read;
  
          const newBackgroundColor = mail.read ? '#F2F5FC' : '#FFFFFF';
          mailDiv.style.backgroundColor = newBackgroundColor;
  
          const iconsContainer = mailDiv.querySelector('.gmail-project__coverage-main-mail-icons');
          iconsContainer.style.backgroundColor = newBackgroundColor;
  
          mailDiv.classList.toggle('read', mail.read);
          mailDiv.classList.toggle('unread', !mail.read);
        });
  
        // Maili detay olarak görüntüleme
        mailDiv.addEventListener('click', (e) => {
          if (
            e.target.classList.contains('gmail-project__coverage-main-mail-star') ||
            e.target.classList.contains('gmail-project__coverage-main-mail-check')
          ) {
            return;
          }
  
          mail.read = true;
          renderMailDetails(mail);
          renderMails();
        });
  
        // Yıldız simgesine tıklayınca maili starredMails'e ekleme
        const starIcon = mailDiv.querySelector('.gmail-project__coverage-main-mail-star');
        starIcon.addEventListener('click', (e) => {
          e.stopPropagation();
          mail.starred = !mail.starred;
  
          if (mail.starred) {
            starredMails.push(mail);
          } else {
            const index = starredMails.findIndex((m) => m === mail); // `starredMails` dizisindeki mailin indeksini bulur.
            if (index > -1) starredMails.splice(index, 1); // Mail dizideyse, `starredMails` dizisinden çıkarılır.
          }
          renderMails();
        });
  
        const deleteIcon = mailDiv.querySelector('.gmail-project__coverage-main-mail-trash');
        deleteIcon.addEventListener('click', (e) => {
          e.stopPropagation();
          mail.deleted = true;
          mail.starred = false;
          deletedMails.push(mail);
          renderMails();
        });
  
        mailDiv.addEventListener('mouseenter', () => {
          const iconsContainer = mailDiv.querySelector('.gmail-project__coverage-main-mail-icons');
          const mailDate = mailDiv.querySelector('.gmail-project__coverage-main-mail-user-date');
          mailDate.style.display='none';
          iconsContainer.style.display = 'flex';
          mailDiv.querySelector('.gmail-project__coverage-main-mail-vertical').style.display = 'inline';
        });
  
        mailDiv.addEventListener('mouseleave', () => {
          const iconsContainer = mailDiv.querySelector('.gmail-project__coverage-main-mail-icons');
          const mailDate = mailDiv.querySelector('.gmail-project__coverage-main-mail-user-date');
          mailDate.style.display='flex';
          iconsContainer.style.display = 'none';
          mailDiv.querySelector('.gmail-project__coverage-main-mail-vertical').style.display = 'none';
        });
      });

      new Sortable(mailsContainer, {
        animation: 150,
        onEnd: (evt) => { // Bir öğe başarıyla sürüklenip bırakıldığında çalışacak olaydır.
          const movedItem = currentMails.splice(evt.oldIndex, 1)[0];// Taşınan öğeyi eski konumundan çıkarır.
          currentMails.splice(evt.newIndex, 0, movedItem);// Öğeyi yeni konuma ekler.
          renderMails();
        },
      });
  };

  //compose
  const composeBtn = document.querySelector('.gmail-project__coverage-selection-boxs-create-compose');
  const composeBox = document.createElement('div');
  composeBox.classList.add('gmail-project__coverage-main-box'); 

  composeBox.innerHTML = `
    <div class="gmail-project__coverage-main-box-header">
      <p class="gmail-project__coverage-main-box-header-text">New Message</p>
      <div class="gmail-project__coverage-main-box-header-icons">
        <i class="gmail-project__coverage-main-box-header-icons-minimize fa-solid fa-window-minimize"></i>
        <i class="gmail-project__coverage-main-box-header-icons-close fa-solid fa-xmark"></i>
      </div>
    </div>
    <div class="gmail-project__coverage-main-box-content">
      <div class="gmail-project__coverage-main-box-content-to">
        <label class="gmail-project__coverage-main-box-content-to-text" for="to"></label>
        <input class="gmail-project__coverage-main-box-content-to-input" id="to" placeholder="To" required>
        <hr class="gmail-project__coverage-main-box-content-to-stick">
      </div>
      <div class="gmail-project__coverage-main-box-content-subject">
        <input class="gmail-project__coverage-main-box-content-subject-input" type="text" id="subject" placeholder="Subject" required>
        <hr class="gmail-project__coverage-main-box-content-subject-hr">
      </div>
      <textarea class="gmail-project__coverage-main-box-content-body" id="body" placeholder="Write your message..." required></textarea>
    </div>
    <div class="gmail-project__coverage-main-box-content-footer">
      <button class="gmail-project__coverage-main-box-content-footer-send" id="send-btn">Send</button>
      <div class="gmail-project__coverage-main-box-content-footer-icon">
        <i class="fa-solid fa-paperclip"></i>
        <i class="fa-solid fa-link"></i>
        <i class="fa-regular fa-face-smile"></i>
        <i class="fa-brands fa-google-drive"></i>
        <i class="fa-solid fa-image"></i>
        <i class="fa-solid fa-lock"></i>
        <i class="fa-solid fa-pencil"></i>
        <i class="fa-solid fa-ellipsis-vertical" id="vertical-btn"></i>
      </div>
      <div class="gmail-project__coverage-main-box-content-footer-trash">
        <i class="fa-solid fa-trash"></i>
      </div>
    </div>
  `;
  composeBox.style.display = 'none'; 
  document.body.appendChild(composeBox);

  composeBtn.addEventListener('click', () => {
    composeBox.style.display = 'flex';
  });

  const closeBtn = composeBox.querySelector('.gmail-project__coverage-main-box-header-icons-close');
  closeBtn.addEventListener('click', () => {
    composeBox.style.display = 'none'; 
  });

  // Minimize etme
  const minimizeBtn = composeBox.querySelector('.gmail-project__coverage-main-box-header-icons-minimize');
  minimizeBtn.addEventListener('click', () => {
    composeBox.style.height = composeBox.style.height === '40px' ? 'auto' : '40px';
  });

  const notificationSound = new Audio('/gmail/page/sounds/notification.mp3');

  function playNotificationSound() {
    try {
      notificationSound.play();
    } catch (error) {
      console.error("Failed to play notification sound:", error);
    }
  }

  composeBox.querySelector('#send-btn').addEventListener('click', () => {
    const to = document.getElementById('to').value.trim(); //içeriği alır baştaki ve sondaki boşlukları temizler
    const subject = document.getElementById('subject').value.trim();
    const body = document.getElementById('body').value.trim();

    if (to && subject && body) {
      const trimmedBody = body.length > 50 ? `${body.substring(0, 50)}...` : body;

      const mail = {
        sender: to,
        detail: `${subject} - ${trimmedBody}`,
        date: new Date().toLocaleDateString(),
        starred: false,
        deleted: false,
        read: false,
        body: body, 
        email: to, 
      };
      
    sentMails.push(mail);
    playNotificationSound();
    console.log("Mail sent:", mail);

    document.getElementById('to').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('body').value = '';

    composeBox.style.display = 'none';
   } else {
    alert("Please fill all fields before sending.");
   }
  });

  //soldaki aktif butonlar
  const inboxBtn = document.querySelector('.gmail-project__coverage-selection-boxs-headline-inbox');
  const starredBtn = document.querySelector('.gmail-project__coverage-selection-boxs-headline-star');
  const sentBtn = document.querySelector('.gmail-project__coverage-selection-boxs-headline-sent');
  const binBtn = document.querySelector('.gmail-project__coverage-selection-boxs-menu-item .fa-trash').closest('.gmail-project__coverage-selection-boxs-menu-item');

  const allSections = [inboxBtn, starredBtn, binBtn, sentBtn];

  //renk ayarı
  const setActiveSection = (activeSection) => {
    allSections.forEach(section => {
      section.classList.remove('active');
      section.parentElement.classList.remove('active');
    });

    activeSection.classList.add('active');
    activeSection.parentElement.classList.add('active');
  };

  setActiveSection(inboxBtn);
  renderMails();

  inboxBtn.addEventListener('click', () => {
    setActiveSection(inboxBtn);
    renderMails();
  });

  starredBtn.addEventListener('click', () => {
    setActiveSection(starredBtn);
    renderMails({ starred: true });
  });

  sentBtn.addEventListener('click', () => {
    setActiveSection(sentBtn);
    renderMails();
  });

  binBtn.addEventListener('click', () => {
    setActiveSection(binBtn);
    renderMails({ deleted: true });
  });

  const renderMailDetails = (mail) => {
    controllerDiv.style.display = 'none';
    selectionDiv.style.display = 'none';
    mailsContainer.style.display = 'none';

    const detailContainer = document.createElement('div');
    detailContainer.classList.add('gmail-project__coverage-main-detail');

    detailContainer.innerHTML = `
      <div class="gmail-project__coverage-main-detail-icons">
        <i class="gmail-project__coverage-main-detail-icons-back fa fa-arrow-left"></i>
        <i class="gmail-project__coverage-main-detail-icons-archive fa-solid fa-archive" title="Arşivle"></i>
        <i class="gmail-project__coverage-main-detail-icons-exclamation fa-solid fa-circle-exclamation"></i>
        <i class="gmail-project__coverage-main-detail-icons-trash fa-solid fa-trash" title="Sil"></i>
        <i class="gmail-project__coverage-main-detail-icons-stick fa-solid fa-ellipsis-vertical"></i>
        <i class="gmail-project__coverage-main-detail-icons-open fa-solid fa-envelope-open" title="Okundu olarak işaretle"></i>
        <i class="gmail-project__coverage-main-detail-icons-clock fa-solid fa-clock" title="Ertele"></i>
        <i class="gmail-project__coverage-main-detail-icons-check fa-regular fa-circle-check"></i>
        <i class="gmail-project__coverage-main-detail-icons-stick fa-solid fa-ellipsis-vertical"></i>
        <i class="gmail-project__coverage-main-detail-icons-folder fa-solid fa-folder-plus"></i>
        <i class="gmail-project__coverage-main-detail-icons-left fa-solid fa-delete-left"></i>
        <i class="gmail-project__coverage-main-detail-icons-vertical fa-solid fa-ellipsis-vertical"></i> 

        <div class="gmail-project__coverage-main-detail-icons-interval">
        <p class="gmail-project__coverage-main-detail-icons-interval-text">1-16 of 16</p>
        <i class="gmail-project__coverage-main-detail-icons-interval-left fa-solid fa-chevron-left"></i>
         <i class="gmail-project__coverage-main-detail-icons-interval-right fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div class="gmail-project__coverage-main-detail-content">
        <p class="gmail-project__coverage-main-detail-content-text">${mail.detail}</p>
      
        <div class="gmail-project__coverage-main-detail-content-inbox">
          <p class="gmail-project__coverage-main-detail-content-inbox-text">Inbox</p>
          <i class="gmail-project__coverage-main-detail-content-inbox-cancel fa-solid fa-x fa-2xs"></i>
        </div>

        <div class="gmail-project__coverage-main-detail-content-icons">
            <i class="gmail-project__coverage-main-detail-content-icons-print fa-solid fa-print"></i>
            <i class="gmail-project__coverage-main-detail-content-icons-share fa-solid fa-arrow-up-right-from-square"></i>
          </div>
      </div>

      <div class="gmail-project__coverage-main-detail-sender">
          <i class="gmail-project__coverage-main-detail-sender-user fa fa-user-circle"></i>
          <span class="gmail-project__coverage-main-detail-sender-name">
            ${mail.sender} 	&nbsp; 
            <p class="gmail-project__coverage-main-detail-sender-name-mail">&lt;${mail.email}@gmail.com&gt;</p> 
          </span>

          <div class="gmail-project__coverage-main-detail-sender-info">
            <p class="gmail-project__coverage-main-detail-sender-info-text">June 25, 2018, 3:26PM</p>
             <i class="gmail-project__coverage-main-detail-sender-info-star ${mail.starred ? 'fa-solid' : 'fa-regular'} fa-star fa-sm" title="Yıldızla"></i>
            <i class="gmail-project__coverage-main-detail-sender-info-reply fa-solid fa-reply"></i>
            <i class="gmail-project__coverage-main-detail-sender-info-stick fa-solid fa-ellipsis-vertical"></i>
          </div>
      </div>

      <div class="gmail-project__coverage-main-detail-explanation">
        <p class="gmail-project__coverage-main-detail-explanation-text">${mail.body || 'No additional content available.'}</p>
        <hr class="gmail-project__coverage-main-detail-explanation-divider">
      </div>
    `;
    mainContainer.appendChild(detailContainer);

    const backButton = detailContainer.querySelector('.gmail-project__coverage-main-detail-icons-back');
    backButton.addEventListener('click', () => {
      detailContainer.remove();
      controllerDiv.style.display = 'flex';
      selectionDiv.style.display = 'flex';
      mailsContainer.style.display = 'block';
    
      // Kullanıcının hangi sekmede olduğunu kontrol et
      if (binBtn.classList.contains('active')) {
        renderMails({ deleted: true }); // Silinen mailleri render et
      } else if (starredBtn.classList.contains('active')) {
        renderMails({ starred: true }); // Yıldızlı mailleri render et
      } else if (sentBtn.classList.contains('active')) {
        renderMails(mailCategories['Sent']); // Gönderilen mailleri render et
      }
    });

    const deleteIconDetail = detailContainer.querySelector('.gmail-project__coverage-main-detail-icons-trash');
    deleteIconDetail.addEventListener('click', () => {
      mail.deleted = true;
      mail.starred = false;
      deletedMails.push(mail);
      detailContainer.remove();
      renderMails();
      controllerDiv.style.display = 'flex';
      selectionDiv.style.display = 'flex';
      mailsContainer.style.display = 'block';
    });

    const starIconDetail = detailContainer.querySelector('.gmail-project__coverage-main-detail-sender-info-star');
    starIconDetail.addEventListener('click', () => {
      mail.starred = !mail.starred;
      starIconDetail.classList.toggle('fa-solid', mail.starred);
      starIconDetail.classList.toggle('fa-regular', !mail.starred);
      if (mail.starred) {
        starredMails.push(mail);
      } else {
        const index = starredMails.findIndex((m) => m === mail);
        if (index > -1) starredMails.splice(index, 1);
      }
      renderMails();
    });
  };

  document.querySelector('.gmail-project__coverage-selection-boxs-headline-star').addEventListener('click', () => {
    console.log("Starred tab clicked");
    currentMails = starredMails;
    renderMails(starredMails);
    document.querySelector('.gmail-project__coverage-main').appendChild(mailsContainer);
  });

  document.querySelector('.gmail-project__coverage-selection-boxs-menu-item .fa-trash').closest('.gmail-project__coverage-selection-boxs-menu-item').addEventListener('click', () => {
    console.log("Deleted tab clicked");
    currentMails = deletedMails;
    renderMails({ deleted: true });
  });

  document.querySelector('.gmail-project__coverage-selection-boxs-headline-inbox').addEventListener('click', () => {
    currentMails = mailCategories['Primary'];
    console.log("Inbox tab clicked");
    renderMails(inboxMails);
    document.querySelector('.gmail-project__coverage-main').appendChild(mailsContainer);
  });

  document.querySelector('.gmail-project__coverage-selection-boxs-headline-sent').addEventListener('click', () => {
    console.log("Sent tab clicked");
    currentMails = sentMails; 
    renderMails(); 
  });

  //mail içerisindeyken soldan herhangi bir yere gitmek istediğimiz zaman aktifleşiyor
  const closeDetailView = () => {
    const detailContainer = document.querySelector('.gmail-project__coverage-main-detail');
    if (detailContainer) {
      detailContainer.remove(); 
      controllerDiv.style.display = 'flex';
      selectionDiv.style.display = 'flex';
      mailsContainer.style.display = 'block';
    }
  };
  
  inboxBtn.addEventListener('click', () => {
    closeDetailView(); 
    setActiveSection(inboxBtn); 
    currentMails = mailCategories['Primary'];
    renderMails();
  
    // SelectionDiv'deki mavi Primaryi aktif yap
    const primaryCategory = selectionDiv.querySelector('.gmail-project__coverage-main-selection-primary');
    setActiveCategory(primaryCategory);
  });
  
  starredBtn.addEventListener('click', () => {
    closeDetailView(); 
    setActiveSection(starredBtn);
    renderMails({ starred: true });
  });
  
  sentBtn.addEventListener('click', () => {
    closeDetailView(); 
    setActiveSection(sentBtn);
    renderMails();
  });
  
  binBtn.addEventListener('click', () => {
    closeDetailView(); 
    setActiveSection(binBtn);
    renderMails({ deleted: true });
  });

  //Primary Promotions kısmı
  const selectionDiv = document.createElement('div');
  selectionDiv.classList.add('gmail-project__coverage-main-selection');

  const setActiveCategory = (categoryDiv) => {
    selectionDiv.querySelectorAll('div').forEach(div => div.classList.remove('active'));
    categoryDiv.classList.add('active'); //seçilen active diğerlerinin active durumunu kaldır
  };

  Object.keys(mailCategories).forEach((category) => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add(`gmail-project__coverage-main-selection-${category.toLowerCase()}`);
    categoryDiv.innerHTML = `
      <i class="fa-solid ${category === 'Primary' ? 'fa-inbox' : category === 'Promotions' ? 'fa-tag' : 'fa-user-group'}"></i>
      <p class="gmail-project__coverage-main-selection-${category.toLowerCase()}-text">${category}</p>
    `;

    categoryDiv.addEventListener('click', () => {
      currentMails = mailCategories[category];
      renderMails();
      setActiveCategory(categoryDiv);
    });

    if (category === 'Primary') {
      categoryDiv.classList.add('active');
    }

    selectionDiv.appendChild(categoryDiv);
  });

  mainContainer.appendChild(controllerDiv);
  mainContainer.appendChild(selectionDiv);
  mainContainer.appendChild(mailsContainer);
  document.body.appendChild(mainContainer);
  document.querySelector('.gmail-project__coverage-selection').appendChild(mainContainer); //kısmına yerleştirilir
  renderMails();


//More - Less butonu
  const moreBtn = document.getElementById('more-btn');
  const menu = document.getElementById('menu');
  const moreText = document.querySelector('.gmail-project__coverage-selection-boxs-headline-more-text');
  const moreIcon = document.querySelector('.gmail-project__coverage-selection-boxs-headline-more-icon');
  
  moreBtn.addEventListener('click', () => {
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
      moreText.textContent = 'Less';
      moreIcon.classList.remove('fa-chevron-down');
      moreIcon.classList.add('fa-chevron-up');
    } else {
      menu.style.display = 'none';
      moreText.textContent = 'More';
      moreIcon.classList.remove('fa-chevron-up');
      moreIcon.classList.add('fa-chevron-down');
      }
    });
  
//labels
const addIcon = document.getElementById('add-icon');
const modal = document.getElementById('modal');
const overlay = document.getElementById('modal-overlay');
const cancelBtn = document.getElementById('cancel-btn');
const createBtn = document.getElementById('create-btn');
const labelInput = document.getElementById('labelName');
const colorInput = document.getElementById('labelColor');
const categoriesContainer = document.querySelector('.gmail-project__coverage-selection-boxs-labels');
let editingCategory = null; // Düzenleme durumunu izlemek için

// Modal açma/kapatma + butonu
addIcon.addEventListener('click', () => {
  modal.style.display = 'block';
  overlay.style.display = 'block';
});

cancelBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
  editingCategory = null;
});

overlay.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
  editingCategory = null;
});

// Dinamik kategori oluşturma
createBtn.addEventListener('click', () => {
  const labelName = labelInput.value.trim();
  const labelColor = colorInput.value;

  if (labelName) {
    if (editingCategory) {
      // Düzenleme durumunda kategori güncellenir
      const articleDiv = editingCategory.querySelector('.gmail-project__coverage-selection-boxs-labels-categories-article');
      const labelText = editingCategory.querySelector('.gmail-project__coverage-selection-boxs-labels-categories-text');
      articleDiv.style.backgroundColor = labelColor;
      labelText.textContent = labelName.length > 15 ? `${labelName.substring(0, 15)}...` : labelName;

      editingCategory = null;
    } else {
      // Yeni kategori oluşturma
      const newCategory = document.createElement('div');
      newCategory.classList.add('gmail-project__coverage-selection-boxs-labels-categories');

      const articleDiv = document.createElement('div');
      articleDiv.classList.add('gmail-project__coverage-selection-boxs-labels-categories-article');
      articleDiv.style.backgroundColor = labelColor;

      const labelText = document.createElement('p');
      labelText.classList.add('gmail-project__coverage-selection-boxs-labels-categories-text');
      labelText.textContent = labelName.length > 15 ? `${labelName.substring(0, 15)}...` : labelName;

      const verticalIcon = document.createElement('i');
      verticalIcon.classList.add('gmail-project__coverage-selection-boxs-labels-categories-icon', 'fa-solid', 'fa-ellipsis-vertical');
      verticalIcon.style.cursor = 'pointer';

      addDropdownMenuHandler(verticalIcon, labelText, articleDiv, newCategory);

      newCategory.appendChild(articleDiv);
      newCategory.appendChild(labelText);
      newCategory.appendChild(verticalIcon);
      categoriesContainer.appendChild(newCategory);
    }

    // Modal kapatma
    modal.style.display = 'none';
    overlay.style.display = 'none';
    labelInput.value = '';
    colorInput.value = '#333333';
  }
});

// Girdi değişimini izleme bak
labelInput.addEventListener('input', () => {
  if (labelInput.value.trim() !== '') {
    createBtn.disabled = false;
  } else {
    createBtn.disabled = true;
  }
});

// Dropdown menüsü bağlama
const addDropdownMenuHandler = (icon, labelText, articleDiv, categoryDiv) => {
  icon.addEventListener('click', (e) => {
    e.stopPropagation();

    const dropdownMenu = document.createElement('ul');
    dropdownMenu.classList.add('gmail-project__coverage-selection-boxs-labels-categories-icon-menu');
    dropdownMenu.style.top = `${e.clientY}px`;
    dropdownMenu.style.left = `${e.clientX}px`;

    const editOption = document.createElement('li');
    editOption.classList.add('gmail-project__coverage-selection-boxs-labels-categories-icon-menu-edit');
    editOption.textContent = 'Edit';
    dropdownMenu.appendChild(editOption);

    const deleteOption = document.createElement('li');
    deleteOption.classList.add('gmail-project__coverage-selection-boxs-labels-categories-icon-menu-delete');
    deleteOption.textContent = 'Delete';
    dropdownMenu.appendChild(deleteOption);

    document.body.appendChild(dropdownMenu);

    // Düzenleme
    editOption.addEventListener('click', () => {
      labelInput.value = labelText.textContent;
      colorInput.value = articleDiv.style.backgroundColor;
      editingCategory = categoryDiv;
      modal.style.display = 'block';
      overlay.style.display = 'block';
      dropdownMenu.remove();
    });

    // Silme
    deleteOption.addEventListener('click', () => {
      categoriesContainer.removeChild(categoryDiv);
      dropdownMenu.remove();
    });

    document.addEventListener('click', () => {
      if (dropdownMenu.parentNode) dropdownMenu.parentNode.removeChild(dropdownMenu);
    }, { once: true });
  });
};

// HTML'deki mevcut ikonlara bağlama bak
document.querySelectorAll('.gmail-project__coverage-selection-boxs-labels-categories-icon').forEach((icon) => {
  const categoryDiv = icon.closest('.gmail-project__coverage-selection-boxs-labels-categories');
  const labelText = categoryDiv.querySelector('.gmail-project__coverage-selection-boxs-labels-categories-text');
  const articleDiv = categoryDiv.querySelector('.gmail-project__coverage-selection-boxs-labels-categories-article');

  addDropdownMenuHandler(icon, labelText, articleDiv, categoryDiv);
});

// Toggle-Solu küçültme
  const menuBoxs = document.querySelector('.gmail-project__coverage-selection-boxs');
  const mainBoxs = document.querySelector('.gmail-project__coverage-main');
  // const mainContainer = document.querySelector('.gmail-project__coverage-main-mail-detail');
  const toggleBtn = document.querySelector('.gmail-project__nav-catagory-menu i');
  let isCollapsed = false;

  toggleBtn.addEventListener('click', () => {
    isCollapsed = !isCollapsed;

    if (isCollapsed) {
      menuBoxs.classList.add('collapsed');
      menuBoxs.classList.remove('expanded');
      mainBoxs.classList.add('collapsed');
      mainBoxs.classList.remove('expanded');
    } else {
      menuBoxs.classList.add('expanded');
      menuBoxs.classList.remove('collapsed');
      mainBoxs.classList.add('expanded');
      mainBoxs.classList.remove('collapsed');
    }
  });


// search
  const searchInput = document.querySelector('.gmail-project__nav-search-input-form');

  searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
    const mailItems = document.querySelectorAll('.gmail-project__coverage-main-mail');

    mailItems.forEach(item => {
      const sender = item.querySelector('.gmail-project__coverage-main-mail-user-sender').textContent.toLowerCase();

      if (sender.includes(searchValue)) {
        item.style.display = 'flex'; 
      } else {
        item.style.display = 'none'; 
      }
    });
  });













