//json olarak çevir

// .mail__main-content-list-item-left,
//       .mail__main-content-list-item-icons {
//        display: flex;
//       }

// document.addEventListener('DOMContentLoaded', () => {
//   const mailItems = document.querySelectorAll('.gmail-project__coverage-main-mail');
  
//   mailItems.forEach(item => {
//     const starIcon = item.querySelector('.gmail-project__coverage-main-mail-star');
//     starIcon.addEventListener('click', () => {
//       starIcon.classList.toggle('fa-solid'); 
//       starIcon.classList.toggle('active'); 
//     });

//     item.addEventListener('mouseenter', () => {
//       const icons = item.querySelector('.gmail-project__coverage-main-mail-icons');
//       icons.style.display = 'flex';
//     });

//     item.addEventListener('mouseleave', () => {
//       const icons = item.querySelector('.gmail-project__coverage-main-mail-icons');
//       icons.style.display = 'none';
//     });

//     item.addEventListener('mouseenter', () => {
//       const gripIcon = item.querySelector('.gmail-project__coverage-main-mail-vertical');
//       gripIcon.style.display = 'flex';
//     });

//     item.addEventListener('mouseleave', () => {
//       const gripIcon = item.querySelector('.gmail-project__coverage-main-mail-vertical');
//       gripIcon.style.display = 'none';
//     });

//     const archiveIcon = item.querySelector('.fa-archive');
//     const deleteIcon = item.querySelector('.fa-trash');
//     const markAsReadIcon = item.querySelector('.fa-envelope-open');
//     const snoozeIcon = item.querySelector('.fa-clock');

//     archiveIcon.addEventListener('click', () => {
//       console.log('Mail arşivlendi');
//     });

//     deleteIcon.addEventListener('click', () => {
//       console.log('Mail silindi');
//       item.remove(); 
//     });

//     markAsReadIcon.addEventListener('click', () => {
//       console.log('Mail okundu olarak işaretlendi');
//     });

//     snoozeIcon.addEventListener('click', () => {
//       console.log('Mail ertelendi');
//     });
//   });

//   // Mailleri yukarı ve aşağı sürükle-bırak yöntemiyle taşımak
//   let draggedElement = null;

//   mailItems.forEach(item => {
//     item.setAttribute('draggable', true); // Mail öğesine sürüklenebilirlik ekle

//     item.addEventListener('dragstart', (e) => {
//       draggedElement = item;
//       e.dataTransfer.setData('text/plain', null);
//       item.classList.add('dragging'); 
//     });

//     item.addEventListener('dragend', () => {
//       draggedElement.classList.remove('dragging'); 
//       draggedElement = null;
//     });

//     item.addEventListener('dragover', (e) => {
//       e.preventDefault(); 
//     });

//     item.addEventListener('drop', (e) => {
//       e.preventDefault();
//       if (draggedElement !== item) {
//         // Sürüklenen öğeyi, bırakılan öğenin önüne yerleştir
//         const allItems = [...document.querySelectorAll('.gmail-project__coverage-main-mail')];
//         const draggedIndex = allItems.indexOf(draggedElement);
//         const targetIndex = allItems.indexOf(item);

//         if (draggedIndex > targetIndex) {
//           item.parentNode.insertBefore(draggedElement, item); 
//         } else {
//           item.parentNode.insertBefore(draggedElement, item.nextSibling);
//         }
//       }
//     });
//   });
// });

//main
// document.addEventListener('DOMContentLoaded', () => {
//   const mainContainer = document.createElement('div');
//   mainContainer.classList.add('gmail-project__coverage-main');

//   const controllerDiv = document.createElement('div');
//   controllerDiv.classList.add('gmail-project__coverage-main-controller');
//   controllerDiv.innerHTML = `
//     <input type="checkbox" id="horns" name="horns" />
//     <i class="gmail-project__coverage-main-controller-down fa-solid fa-caret-down"></i>
//     <i class="gmail-project__coverage-main-controller-refresh fa-solid fa-rotate-right"></i>
//     <i class="gmail-project__coverage-main-controller-other fa-solid fa-ellipsis-vertical"></i>
//     <div class="gmail-project__coverage-main-controller-interval">
//       <p class="gmail-project__coverage-main-controller-interval-text">1-16 of 16</p>
//       <i class="gmail-project__coverage-main-controller-interval-left fa-solid fa-chevron-left"></i>
//       <i class="gmail-project__coverage-main-controller-interval-right fa-solid fa-chevron-right"></i>
//     </div>
//   `;
  
//   const selectionDiv = document.createElement('div');
//   selectionDiv.classList.add('gmail-project__coverage-main-selection');
//   selectionDiv.innerHTML = `
//     <div class="gmail-project__coverage-main-selection-primary">
//       <i class="fa-solid fa-inbox"></i>
//       <p class="gmail-project__coverage-main-selection-primary-text">Primary</p>
//     </div>
//     <div class="gmail-project__coverage-main-selection-promotions">
//       <i class="fa-solid fa-tag"></i>
//       <p class="gmail-project__coverage-main-selection-promotions-text">Promotions</p>
//     </div>
//     <div class="gmail-project__coverage-main-selection-social">
//       <i class="fa-solid fa-user-group"></i>
//       <p class="gmail-project__coverage-main-selection-social-text">Social</p>
//     </div>
//   `;

//   const mails = [
//     { 
//       sender: 'Acme Inc.', 
//       detail: 'Insights: The latest in industrial equipment and tools', 
//       date: 'Feb, 26',
//       starred: false,
//       deleted: false
//     },
//     { 
//       sender: 'Travel Tales', 
//       detail: 'Our latest Adventures and Destinations', 
//       date: 'March, 26',
//       starred: false,
//       deleted: false
//     },
//     { 
//       sender: 'Delta Enterprises', 
//       detail: 'Delta Weekly News: Learn about important safety tips before you fly!', 
//       date: 'Jan, 26',
//       starred: false,
//       deleted: false
//     }
//   ];

//   const mailsContainer = document.createElement('div');

//   const renderMails = (filter = {}) => {
//     mailsContainer.innerHTML = '';
//     mails
//       .filter(mail => {
//         if (filter.starred !== undefined) return mail.starred === filter.starred;
//         if (filter.deleted !== undefined) return mail.deleted === filter.deleted;
//         return !mail.deleted;
//       })
//       .forEach((mail, index) => {
//         const mailDiv = document.createElement('div');
//         mailDiv.classList.add('gmail-project__coverage-main-mail');
//         mailDiv.setAttribute('draggable', 'true'); 
//         mailDiv.dataset.index = index; 

//         mailDiv.innerHTML = `
//           <i class="gmail-project__coverage-main-mail-vertical fa-solid fa-grip-vertical" style="display: none;"></i>
//           <input class="gmail-project__coverage-main-mail-check" type="checkbox" />
//           <i class="gmail-project__coverage-main-mail-star ${mail.starred ? 'fa-solid' : 'fa-regular'} fa-star fa-sm"></i>
//           <p class="gmail-project__coverage-main-mail-sender">${mail.sender}</p>
//           <p class="gmail-project__coverage-main-mail-detail">${mail.detail}</p>
//           <p class="gmail-project__coverage-main-mail-date">${mail.date}</p>
//           <div class="gmail-project__coverage-main-mail-icons" style="display: none;">
//             <i class="fa-solid fa-archive"></i>
//             <i class="fa-solid fa-trash"></i>
//             <i class="fa-solid fa-envelope-open"></i>
//             <i class="fa-solid fa-clock"></i>
//           </div>
//         `;

//         mailsContainer.appendChild(mailDiv);

//         const starIcon = mailDiv.querySelector('.gmail-project__coverage-main-mail-star');
//         starIcon.addEventListener('click', () => {
//           mail.starred = !mail.starred;
//           starIcon.classList.toggle('fa-solid', mail.starred);
//           starIcon.classList.toggle('fa-regular', !mail.starred);
//         });

//         const deleteIcon = mailDiv.querySelector('.fa-trash');
//         deleteIcon.addEventListener('click', () => {
//           mail.deleted = true;
//           mail.starred = false;

//           // Eğer 'starred' sekmesindeysek, yalnızca starred: true olanları render et
//           if (filter.starred) {
//             renderMails({ starred: true });
//           } else {
//             renderMails();
//           }
//         });

//         mailDiv.addEventListener('mouseenter', () => {
//           mailDiv.querySelector('.gmail-project__coverage-main-mail-icons').style.display = 'flex';
//           mailDiv.querySelector('.gmail-project__coverage-main-mail-vertical').style.display = 'inline';
//         });
//         mailDiv.addEventListener('mouseleave', () => {
//           mailDiv.querySelector('.gmail-project__coverage-main-mail-icons').style.display = 'none';
//           mailDiv.querySelector('.gmail-project__coverage-main-mail-vertical').style.display = 'none';
//         });

//         // Sürükleme olayları
//         mailDiv.addEventListener('dragstart', (e) => {
//           e.dataTransfer.setData('text/plain', mailDiv.dataset.index);
//           mailDiv.classList.add('dragging');
//         });

//         mailDiv.addEventListener('dragover', (e) => {
//           e.preventDefault();
//           mailDiv.classList.add('drag-over');
//         });

//         mailDiv.addEventListener('dragleave', () => {
//           mailDiv.classList.remove('drag-over');
//         });

//         mailDiv.addEventListener('drop', (e) => {
//           e.preventDefault();
//           mailDiv.classList.remove('drag-over');
//           const draggingIndex = e.dataTransfer.getData('text/plain');
//           const droppedIndex = mailDiv.dataset.index;
//           [mails[draggingIndex], mails[droppedIndex]] = [mails[droppedIndex], mails[draggingIndex]];
//           renderMails(); 
//         });

//         mailDiv.addEventListener('dragend', () => {
//           mailDiv.classList.remove('dragging');
//         });
//       });
//   };

//   // Starred sekmesine tıklayınca sadece yıldızlı mailleri render et
//   document.querySelector('.gmail-project__coverage-selection-boxs-headline-star').addEventListener('click', () => {
//     renderMails({ starred: true });
//   });

//   // Bin sekmesine tıklayınca sadece silinmiş mailleri render et
//   document.querySelector('.gmail-project__coverage-selection-boxs-menu-item .fa-trash').closest('.gmail-project__coverage-selection-boxs-menu-item').addEventListener('click', () => {
//     renderMails({ deleted: true });
//   });

//   // Inbox sekmesine tıklayınca tüm mailleri render et
//   document.querySelector('.gmail-project__coverage-selection-boxs-headline-inbox').addEventListener('click', () => {
//     renderMails();
//   });

//   mainContainer.appendChild(controllerDiv);
//   mainContainer.appendChild(selectionDiv);
//   mainContainer.appendChild(mailsContainer);
//   document.querySelector('.gmail-project__coverage-selection').appendChild(mainContainer);

//   renderMails();
// });

document.addEventListener('DOMContentLoaded', () => {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('gmail-project__coverage-main');

  const controllerDiv = document.createElement('div');
  controllerDiv.classList.add('gmail-project__coverage-main-controller');
  controllerDiv.innerHTML = `
    <input type="checkbox" id="horns" name="horns" />
    <i class="gmail-project__coverage-main-controller-down fa-solid fa-caret-down"></i>
    <i class="gmail-project__coverage-main-controller-refresh fa-solid fa-rotate-right"></i>
    <i class="gmail-project__coverage-main-controller-other fa-solid fa-ellipsis-vertical"></i>
    <div class="gmail-project__coverage-main-controller-interval">
      <p class="gmail-project__coverage-main-controller-interval-text">1-16 of 16</p>
      <i class="gmail-project__coverage-main-controller-interval-left fa-solid fa-chevron-left"></i>
      <i class="gmail-project__coverage-main-controller-interval-right fa-solid fa-chevron-right"></i>
    </div>
  `;

  // Tüm kategorilerdeki yıldızlı mailleri burada topluyoruz
  const starredMails = [];

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
        email: 'acme2233@gmail.com',
      },
      {
        sender: 'Travel Tales',
        detail: 'Our latest Adventures and Destinations',
        date: 'March, 26',
        starred: false,
        deleted: false,
        read: false,
        body: 'Travel stories and destinations in detail.',
        email: 'travel6695@gmail.com',
      },
      {
        sender: 'Delta Enterprises',
        detail: 'Delta Weekly News: Learn about important safety tips before you fly!',
        date: 'Jan, 26',
        starred: false,
        deleted: false,
        read: true,
        body: 'Safety tips and updates from Delta Enterprises.',
        email: 'delta2879@gmail.com',
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
        email: 'promo123@gmail.com',
      },
      {
        sender: 'Sales Corp.',
        detail: 'Upcoming sales event',
        date: 'Mar, 15',
        starred: false,
        deleted: false,
        read: true,
        body: 'Join our sales event for exclusive deals.',
        email: 'salescorp@gmail.com',
      },
      {
        sender: 'Discount Offers',
        detail: 'Limited-time discounts',
        date: 'Mar, 20',
        starred: false,
        deleted: false,
        read: true,
        body: 'Don’t miss our limited-time discounts.',
        email: 'offers123@gmail.com',
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
        email: 'community@forum.com',
      },
      {
        sender: 'Social Updates',
        detail: 'Your friends shared new posts',
        date: 'Apr, 3',
        starred: false,
        deleted: false,
        read: false,
        body: 'See what your friends are sharing.',
        email: 'social@updates.com',
      },
      {
        sender: 'Event Invites',
        detail: 'You have been invited to an event',
        date: 'Mar, 25',
        starred: false,
        deleted: false,
        read: true,
        body: 'Join us for the upcoming event!',
        email: 'events@invite.com',
      },
    ],
  };

  let currentMails = mailCategories['Primary'];
  const mailsContainer = document.createElement('div');
  mailsContainer.classList.add('mails-container');

  const renderMails = (filter = {}) => {
    mailsContainer.innerHTML = '';
    currentMails
      .filter((mail) => {
        if (filter.starred !== undefined) return mail.starred === filter.starred;
        if (filter.deleted !== undefined) return mail.deleted === filter.deleted;
        return !mail.deleted;
      })
      .forEach((mail, index) => {
        const mailDiv = document.createElement('div');
        mailDiv.classList.add('gmail-project__coverage-main-mail');
        mailDiv.setAttribute('draggable', 'true');
        mailDiv.dataset.index = index;
        mailDiv.style.backgroundColor = mail.read ? '#F2F5FC' : '#FFFFFF';

        mailDiv.innerHTML = `
          <i class="gmail-project__coverage-main-mail-vertical fa-solid fa-grip-vertical" style="display: none;"></i>
          <input class="gmail-project__coverage-main-mail-check" type="checkbox" />
          <i class="gmail-project__coverage-main-mail-star ${mail.starred ? 'fa-solid' : 'fa-regular'} fa-star fa-sm"></i>
          <p class="gmail-project__coverage-main-mail-sender">${mail.sender}</p>
          <p class="gmail-project__coverage-main-mail-detail">${mail.detail}</p>
          <p class="gmail-project__coverage-main-mail-date">${mail.date}</p>
          <div class="gmail-project__coverage-main-mail-icons" style="display: none;">
            <i class="gmail-project__coverage-main-mail-archive fa-solid fa-archive"></i>
            <i class="gmail-project__coverage-main-mail-trash fa-solid fa-trash"></i>
            <i class="gmail-project__coverage-main-mail-open fa-solid fa-envelope-open"></i>
            <i class="gmail-project__coverage-main-mail-clock fa-solid fa-clock"></i>
          </div>
        `;

        mailsContainer.appendChild(mailDiv);

        // Maili detay olarak görüntüleme
        mailDiv.addEventListener('click', (e) => {
          if (
            e.target.classList.contains('gmail-project__coverage-main-mail-star') ||
            e.target.classList.contains('gmail-project__coverage-main-mail-check')
          ) {
            return;
          }
          mail.read = true; // Okundu durumunu güncelle
          renderMailDetails(mail);
          renderMails(); // Stil güncellemeleri için tekrar render
        });

        // Yıldız simgesine tıklayınca maili starredMails'e ekleyelim
        const starIcon = mailDiv.querySelector('.gmail-project__coverage-main-mail-star');
        starIcon.addEventListener('click', (e) => {
          e.stopPropagation();
          mail.starred = !mail.starred;

          if (mail.starred) {
            starredMails.push(mail);
          } else {
            const index = starredMails.findIndex((m) => m === mail);
            if (index > -1) starredMails.splice(index, 1);
          }

          renderMails();
        });

        const deleteIcon = mailDiv.querySelector('.gmail-project__coverage-main-mail-trash');
        deleteIcon.addEventListener('click', (e) => {
          e.stopPropagation();
          mail.deleted = true;
          mail.starred = false;
          renderMails();
        });

        mailDiv.addEventListener('mouseenter', () => {
          mailDiv.querySelector('.gmail-project__coverage-main-mail-icons').style.display = 'flex';
          mailDiv.querySelector('.gmail-project__coverage-main-mail-vertical').style.display = 'inline';
        });
        mailDiv.addEventListener('mouseleave', () => {
          mailDiv.querySelector('.gmail-project__coverage-main-mail-icons').style.display = 'none';
          mailDiv.querySelector('.gmail-project__coverage-main-mail-vertical').style.display = 'none';
        });
      });

      new Sortable(mailsContainer, {
        animation: 150,
        onEnd: (evt) => {
          const movedItem = currentMails.splice(evt.oldIndex, 1)[0];
          currentMails.splice(evt.newIndex, 0, movedItem);
          renderMails();
        },
      });
  };


  const inboxBtn = document.querySelector('.gmail-project__coverage-selection-boxs-headline-inbox');
  const starredBtn = document.querySelector('.gmail-project__coverage-selection-boxs-headline-star');
  const sentBtn = document.querySelector('.gmail-project__coverage-selection-boxs-headline-sent');
  const binBtn = document.querySelector('.gmail-project__coverage-selection-boxs-menu-item .fa-trash').closest('.gmail-project__coverage-selection-boxs-menu-item');

  const allSections = [inboxBtn, starredBtn, binBtn, sentBtn];

  const setActiveSection = (activeSection) => {
    allSections.forEach(section => {
      section.classList.remove('active');
      section.parentElement.classList.remove('active');
    });

    activeSection.classList.add('active');
    activeSection.parentElement.classList.add('active');
  };

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
        <i class="gmail-project__coverage-main-detail-icons-back fa fa-arrow-left" style="cursor: pointer;" id="backButton"></i>
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
        <h2 class="gmail-project__coverage-main-detail-content-text">${mail.detail}</h2>

        <div class="gmail-project__coverage-main-detail-content-inbox">
          <p class="gmail-project__coverage-main-detail-content-inbox-text">Inbox</p>
          <i class="gmail-project__coverage-main-detail-content-inbox-cancel fa-solid fa-x fa-2xs"></i>

          <div class="gmail-project__coverage-main-detail-content-inbox-icons">
            <i class="gmail-project__coverage-main-detail-content-inbox-icons-print fa-solid fa-print"></i>
            <i class="gmail-project__coverage-main-detail-content-inbox-icons-share fa-solid fa-arrow-up-right-from-square"></i>
          </div>
        </div>
      </div>

      <div class="gmail-project__coverage-main-detail-sender">
          <i class="gmail-project__coverage-main-detail-sender-user fa fa-user-circle"></i>
          <span class="gmail-project__coverage-main-detail-sender-name">
            ${mail.sender} 	&nbsp; 
            <p class="gmail-project__coverage-main-detail-sender-name-mail">&lt;${mail.email}&gt;</p> 
          </span>

          <div class="gmail-project__coverage-main-detail-sender-info">
            <p class="gmail-project__coverage-main-detail-sender-info-text">June 25, 2018, 3:26PM</p>
             <i class="gmail-project__coverage-main-detail-icons-star ${mail.starred ? 'fa-solid' : 'fa-regular'} fa-star fa-sm" title="Yıldızla"></i>
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

    const backButton = detailContainer.querySelector('#backButton');
    backButton.addEventListener('click', () => {
      detailContainer.remove();
      controllerDiv.style.display = 'flex';
      selectionDiv.style.display = 'flex';
      mailsContainer.style.display = 'block';
    });

    const deleteIconDetail = detailContainer.querySelector('.gmail-project__coverage-main-detail-icons-trash');
    deleteIconDetail.addEventListener('click', () => {
      mail.deleted = true;
      mail.starred = false;
      detailContainer.remove();
      renderMails();
      controllerDiv.style.display = 'flex';
      selectionDiv.style.display = 'flex';
      mailsContainer.style.display = 'block';
    });

    const starIconDetail = detailContainer.querySelector('.gmail-project__coverage-main-detail-icons-star');
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

  // Yıldızlı maillerin toplandığı sekmeye tıklanınca yıldızlı mailleri gösterir
  document.querySelector('.gmail-project__coverage-selection-boxs-headline-star').addEventListener('click', () => {
    currentMails = starredMails;
    renderMails();
  });

  document.querySelector('.gmail-project__coverage-selection-boxs-menu-item .fa-trash').closest('.gmail-project__coverage-selection-boxs-menu-item').addEventListener('click', () => {
    renderMails({ deleted: true });
  });

  document.querySelector('.gmail-project__coverage-selection-boxs-headline-inbox').addEventListener('click', () => {
    currentMails = mailCategories['Primary'];
    renderMails();
  });

  const selectionDiv = document.createElement('div');
  selectionDiv.classList.add('gmail-project__coverage-main-selection');

  const setActiveCategory = (categoryDiv) => {
    selectionDiv.querySelectorAll('div').forEach(div => div.classList.remove('active'));
    categoryDiv.classList.add('active');
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
  document.querySelector('.gmail-project__coverage-selection').appendChild(mainContainer);
  renderMails();
});


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

//compose 
// document.addEventListener('DOMContentLoaded', () => {
  //   const mainContainer = document.createElement('div');
  //   mainContainer.classList.add('gmail-project__coverage-main');
  
  //   const controllerDiv = document.createElement('div');
  //   controllerDiv.classList.add('gmail-project__coverage-main-controller');
  //   controllerDiv.innerHTML = `
  //     <input type="checkbox" id="horns" name="horns" />
  //     <i class="gmail-project__coverage-main-controller-down fa-solid fa-caret-down"></i>
  //     <i class="gmail-project__coverage-main-controller-refresh fa-solid fa-rotate-right"></i>
  //     <i class="gmail-project__coverage-main-controller-other fa-solid fa-ellipsis-vertical"></i>
  //     <div class="gmail-project__coverage-main-controller-interval">
  //       <p class="gmail-project__coverage-main-controller-interval-text">1-16 of 16</p>
  //       <i class="gmail-project__coverage-main-controller-interval-left fa-solid fa-chevron-left"></i>
  //       <i class="gmail-project__coverage-main-controller-interval-right fa-solid fa-chevron-right"></i>
  //     </div>
  //   `;
  
  //   const selectionDiv = document.createElement('div');
  //   selectionDiv.classList.add('gmail-project__coverage-main-selection');
  //   selectionDiv.innerHTML = `
  //     <div class="gmail-project__coverage-main-selection-primary">
  //       <i class="fa-solid fa-inbox"></i>
  //       <p class="gmail-project__coverage-main-selection-primary-text">Primary</p>
  //     </div>
  //     <div class="gmail-project__coverage-main-selection-promotions">
  //       <i class="fa-solid fa-tag"></i>
  //       <p class="gmail-project__coverage-main-selection-promotions-text">Promotions</p>
  //     </div>
  //     <div class="gmail-project__coverage-main-selection-social">
  //       <i class="fa-solid fa-user-group"></i>
  //       <p class="gmail-project__coverage-main-selection-social-text">Social</p>
  //     </div>
  //   `;
  
  //   const mailsContainer = document.createElement('div');
  
  //   // Compose butonunu ve compose-box alanını oluşturma
  //   const composeBtn = document.createElement('div');
  //   composeBtn.classList.add('gmail-project__coverage-selection-create');
  //   composeBtn.innerHTML = `
  //     <div class="gmail-project__coverage-selection-create-text">
  //       <p>Compose</p>
  //     </div>
  //   `;
  
  //   const composeBox = document.createElement('div');
  //   composeBox.classList.add('gmail-project__coverage-main-box');
  //   composeBox.id = 'compose-box';
  //   composeBox.style.position = 'absolute';
  //   composeBox.style.right = '10px';
  //   composeBox.style.bottom = '10px';
  //   composeBox.style.display = 'none'; // Başlangıçta gizli olacak
  //   composeBox.innerHTML = `
  //     <div class="gmail-project__coverage-main-box-header">
  //       <p class="gmail-project__coverage-main-box-header-text">New Message</p>
  //       <div class="gmail-project__coverage-main-box-header-icons">
  //         <i class="gmail-project__coverage-main-box-header-icons-minimize fa-solid fa-window-minimize"></i>
  //         <i class="gmail-project__coverage-main-box-header-icons-xmark fa-solid fa-xmark"></i>
  //       </div>
  //     </div>
  //     <div class="gmail-project__coverage-main-box-content">
  //       <div class="gmail-project__coverage-main-box-content-to">
  //         <label class="gmail-project__coverage-main-box-content-to-text" for="to">To</label>
  //         <input class="gmail-project__coverage-main-box-content-to-input" type="text" id="to">
  //         <hr>
  //       </div>
  //       <div class="gmail-project__coverage-main-box-content-subject">
  //         <input class="gmail-project__coverage-main-box-content-subject-input" type="text" id="subject" placeholder="Subject">
  //         <hr>
  //       </div>
  //       <textarea class="gmail-project__coverage-main-box-content-body"></textarea>
  //     </div>
  //     <div class="gmail-project__coverage-main-box-content-footer">
  //       <button class="gmail-project__coverage-main-box-content-footer-send" id="send-btn">Send</button>
  //       <div class="gmail-project__coverage-main-box-content-footer-icon">
  //         <i class="fa-solid fa-paperclip"></i>
  //         <i class="fa-solid fa-link"></i>
  //         <i class="fa-regular fa-face-smile"></i>
  //         <i class="fa-brands fa-google-drive"></i>
  //         <i class="fa-solid fa-image"></i>
  //         <i class="fa-solid fa-lock"></i>
  //         <i class="fa-solid fa-pencil"></i>
  //         <i class="fa-solid fa-ellipsis-vertical"></i>
  //       </div>
  //       <div class="gmail-project__coverage-main-box-content-footer-trash">
  //         <i class="fa-solid fa-trash"></i>
  //       </div>
  //     </div>
  //   `;
  
  //   // Compose butonuna tıklayınca composeBox'u açma
  //   composeBtn.addEventListener('click', () => {
  //     composeBox.style.display = 'flex';
  //   });
  
  //   // Kapatma butonuna tıklayınca composeBox'u kapatma
  //   composeBox.querySelector('.gmail-project__coverage-main-box-header-icons-xmark').addEventListener('click', () => {
  //     composeBox.style.display = 'none';
  //   });
  
  //   // Minimize butonuna tıklayınca composeBox'u küçültme
  //   composeBox.querySelector('.gmail-project__coverage-main-box-header-icons-minimize').addEventListener('click', () => {
  //     if (composeBox.style.height === '40px') {
  //       composeBox.style.height = 'auto';
  //     } else {
  //       composeBox.style.height = '40px';
  //     }
  //   });
  
  //   // Send butonuna tıklayınca mesaj gönderme işlemi
  //   composeBox.querySelector('#send-btn').addEventListener('click', () => {
  //     alert('Email sent!');
  //   });
  
  //   // Ana kapsayıcıya ekleme
  //   mainContainer.appendChild(controllerDiv);
  //   mainContainer.appendChild(selectionDiv);
  //   mainContainer.appendChild(mailsContainer);
  //   mainContainer.appendChild(composeBox); // ComposeBox'u mainContainer'a ekliyoruz
  //   document.querySelector('.gmail-project__coverage-selection').appendChild(mainContainer);
  //   document.querySelector('.gmail-project__coverage-selection').appendChild(composeBtn); // Compose butonu en dış div'e ekleniyor
// });

//compose js
document.addEventListener('DOMContentLoaded', () => {
  const composeBtn = document.querySelector('.gmail-project__coverage-selection-boxs-create-compose');
  const composeBox = document.createElement('div');
  composeBox.classList.add('gmail-project__coverage-main-box');
  composeBox.style.display = 'none';

  // Compose formunun içeriği
  composeBox.innerHTML = `
    <div class="gmail-project__coverage-main-box-header">
      <p class="gmail-project__coverage-main-box-header-text">New Message</p>
      <div class="gmail-project__coverage-main-box-header-icons">
        <i class="gmail-project__coverage-main-box-header-icons-minimize fa-solid fa-window-minimize"></i>
        <i class="gmail-project__coverage-main-box-header-icons-xmark fa-solid fa-xmark"></i>
      </div>
    </div>
    <div class="gmail-project__coverage-main-box-content">
      <div class="gmail-project__coverage-main-box-content-to">
        <label class="gmail-project__coverage-main-box-content-to-text" for="to">To</label>
        <input class="gmail-project__coverage-main-box-content-to-input" type="text" id="to" required>
        <hr>
      </div>
      <div class="gmail-project__coverage-main-box-content-subject">
        <input class="gmail-project__coverage-main-box-content-subject-input" type="text" id="subject" placeholder="Subject" required>
        <hr>
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
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <div class="gmail-project__coverage-main-box-content-footer-trash">
        <i class="fa-solid fa-trash"></i>
      </div>
    </div>
  `;

  composeBtn.addEventListener('click', () => {
    console.log("Compose button clicked");
    composeBox.style.display = 'flex';
  });

  composeBox.querySelector('.gmail-project__coverage-main-box-header-icons-xmark').addEventListener('click', () => {
    console.log("Close compose box");
    composeBox.style.display = 'none';
  });

  composeBox.querySelector('.gmail-project__coverage-main-box-header-icons-minimize').addEventListener('click', () => {
    composeBox.style.height = composeBox.style.height === '40px' ? 'auto' : '40px';
  });

  const mailsContainer = document.createElement('div');
  mailsContainer.classList.add('mails-container');
  const inboxMails = [];
  const sentMails = [];
  const starredMails = [];
  const deletedMails = [];

  const renderMails = (mailList) => {
    mailsContainer.innerHTML = ''; // Container'ı temizle
    console.log("Rendering mails:", mailList);
    mailList.forEach(mail => {
      const mailDiv = document.createElement('div');
      mailDiv.classList.add('gmail-project__coverage-main-mail');
      mailDiv.innerHTML = `
        <input class="gmail-project__coverage-main-mail-check" type="checkbox" />
        <i class="gmail-project__coverage-main-mail-star ${mail.starred ? 'fa-solid' : 'fa-regular'} fa-star fa-sm"></i>
        <p class="gmail-project__coverage-main-mail-sender">${mail.sender}</p>
        <p class="gmail-project__coverage-main-mail-detail">${mail.detail}</p>
        <p class="gmail-project__coverage-main-mail-date">${mail.date}</p>
        <div class="gmail-project__coverage-main-mail-icons">
          <i class="fa-solid fa-archive"></i>
          <i class="fa-solid fa-trash"></i>
          <i class="fa-solid fa-envelope-open"></i>
          <i class="fa-solid fa-clock"></i>
        </div>
      `;

      const starIcon = mailDiv.querySelector('.gmail-project__coverage-main-mail-star');
      starIcon.addEventListener('click', () => {
        mail.starred = !mail.starred;
        if (mail.starred) {
          starredMails.push(mail);
        } else {
          const index = starredMails.indexOf(mail);
          if (index > -1) starredMails.splice(index, 1);
        }
        renderMails(mailList);
      });

      const deleteIcon = mailDiv.querySelector('.fa-trash');
      deleteIcon.addEventListener('click', () => {
        mail.deleted = true;
        deletedMails.push(mail);
        const index = mailList.indexOf(mail);
        if (index > -1) mailList.splice(index, 1);
        renderMails(mailList);
      });

      mailDiv.addEventListener('mouseenter', () => {
        mailDiv.querySelector('.gmail-project__coverage-main-mail-icons').style.display = 'flex';
      });

      mailDiv.addEventListener('mouseleave', () => {
        mailDiv.querySelector('.gmail-project__coverage-main-mail-icons').style.display = 'none';
      });

      mailsContainer.appendChild(mailDiv);
    });
  };

  // Send butonuna tıklanınca görüntülenen tüm mailleri "Sent" sekmesine ekler ve Sent sekmesini görüntüler
  composeBox.querySelector('#send-btn').addEventListener('click', () => {
    const to = document.getElementById('to').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const body = document.getElementById('body').value.trim();

    if (to && subject && body) {
      const mail = {
        sender: to,
        detail: `${subject} - ${body}`,
        date: new Date().toLocaleDateString(),
        starred: false,
        deleted: false,
      };
      
      // Tüm mevcut mailleri sentMails dizisine ekle
      inboxMails.forEach(mail => sentMails.push(mail));
      starredMails.forEach(mail => sentMails.push(mail));
      deletedMails.forEach(mail => sentMails.push(mail));
      
      sentMails.push(mail);
      console.log("Mail sent:", mail);

      // Sent sekmesine geçiş yap ve sadece sentMails'i göster
      document.querySelector('.gmail-project__coverage-selection-boxs-headline-sent').click();
      renderMails(sentMails);
      composeBox.style.display = 'none';
    } else {
      alert("Please fill all fields before sending.");
    }
  });

  // Sekme değişikliklerini izleyen işlevler
  document.querySelector('.gmail-project__coverage-selection-boxs-headline-inbox').addEventListener('click', () => {
    console.log("Inbox tab clicked");
    renderMails(inboxMails);
    document.querySelector('.gmail-project__coverage-main').appendChild(mailsContainer);
  });

  document.querySelector('.gmail-project__coverage-selection-boxs-headline-sent').addEventListener('click', () => {
    console.log("Sent tab clicked");
    renderMails(sentMails);
    document.querySelector('.gmail-project__coverage-main').appendChild(mailsContainer);
  });

  document.querySelector('.gmail-project__coverage-selection-boxs-headline-star').addEventListener('click', () => {
    console.log("Starred tab clicked");
    renderMails(starredMails);
    document.querySelector('.gmail-project__coverage-main').appendChild(mailsContainer);
  });

  document.querySelector('.gmail-project__coverage-selection-boxs-menu-item .fa-trash').closest('.gmail-project__coverage-selection-boxs-menu-item').addEventListener('click', () => {
    console.log("Deleted tab clicked");
    renderMails(deletedMails);
    document.querySelector('.gmail-project__coverage-main').appendChild(mailsContainer);
  });

  document.body.appendChild(composeBox);
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
  
    addIcon.addEventListener('click', () => {
      modal.style.display = 'block';
      overlay.style.display = 'block';
    });
  
    cancelBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    });
  
    overlay.addEventListener('click', () => {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    });
  
    createBtn.addEventListener('click', () => {
      const labelName = labelInput.value.trim(); 
      const labelColor = colorInput.value; 
  
      if (labelName) {
        const newCategory = document.createElement('div');
        newCategory.classList.add('gmail-project__coverage-selection-boxs-labels-categories');
        
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('gmail-project__coverage-selection-boxs-labels-categories-article');
        articleDiv.style.backgroundColor = labelColor; 
  
        const labelText = document.createElement('p');
        labelText.classList.add('gmail-project__coverage-selection-boxs-labels-categories-text');
        labelText.textContent = labelName; 
  
        // Yeni yapıyı DOM'a ekle
        newCategory.appendChild(articleDiv);
        newCategory.appendChild(labelText);
        categoriesContainer.appendChild(newCategory);
  
        modal.style.display = 'none';
        overlay.style.display = 'none';
  
        labelInput.value = '';
        colorInput.value = '#333333'; 
      }
    });
  
    labelInput.addEventListener('input', () => {
      if (labelInput.value.trim() !== '') {
        createBtn.disabled = false;
      } else {
        createBtn.disabled = true;
      }
    });

// icon küçültme

// document.addEventListener('DOMContentLoaded', () => {
//   const toggleBtn = document.querySelector('.gmail-project__nav-catagory-menu i');
//   const textElements = document.querySelectorAll('.gmail-project__coverage-selection-boxs-headline p');
//   const labelsText = document.querySelector('.gmail-project__coverage-selection-boxs-labels-add-header'); 
//   const categoriesText = document.querySelector('.gmail-project__coverage-selection-boxs-labels-categories-text');
//   const composeText = document.querySelector('.gmail-project__coverage-selection-boxs-create-compose-text');
//   const menuTexts = document.querySelectorAll('.gmail-project__coverage-selection-boxs-menu-item-text'); 
//   const mainContainer = document.querySelector('.gmail-project__coverage-main'); 
//   const menuContainer = document.querySelector('.gmail-project__coverage-selection-boxs');
//   const labelsIcon = document.querySelector('.gmail-project__coverage-selection-boxs-labels-add-icon'); 

//   let isCollapsed = false;
  
//   toggleBtn.addEventListener('click', () => {
//       isCollapsed = !isCollapsed;

//       // Menü içindeki metinleri göster/gizle
//       textElements.forEach(text => {
//           text.style.display = isCollapsed ? 'none' : 'block';
//       });
//       labelsText.style.display = isCollapsed ? 'none' : 'block';
//       categoriesText.style.display = isCollapsed ? 'none' : 'block'; // is has ve sass variables 
//       composeText.style.display = isCollapsed ? 'none' : 'block'; 
//       menuTexts.forEach(text => {
//           text.style.display = isCollapsed ? 'none' : 'block';
//       });

//       labelsIcon.style.paddingLeft = isCollapsed ? '0px' : '119px';

//       // Menü ve ana konteyner genişletme daraltma işlemi
//       menuContainer.classList.toggle('collapsed', isCollapsed);
//       mainContainer.classList.toggle('expanded', isCollapsed);
//   });
// });

//DÜZELTİLMİŞ HALİ
  const toggleBtn = document.querySelector('.gmail-project__nav-catagory-menu i');
  const menuContainer = document.querySelector('.gmail-project__coverage-selection-boxs');
  
  let isCollapsed = false;
  
  toggleBtn.addEventListener('click', () => {
      isCollapsed = !isCollapsed;
      
      if (isCollapsed) {
          menuContainer.classList.add('collapsed');
          menuContainer.classList.remove('expanded');
      } else {
          menuContainer.classList.add('expanded');
          menuContainer.classList.remove('collapsed');
      }
  });

// search
  const searchInput = document.querySelector('.gmail-project__nav-search-input-form');

  searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
    const mailItems = document.querySelectorAll('.gmail-project__coverage-main-mail');

    mailItems.forEach(item => {
      const sender = item.querySelector('.gmail-project__coverage-main-mail-sender').textContent.toLowerCase();

      if (sender.includes(searchValue)) {
        item.style.display = 'flex'; 
      } else {
        item.style.display = 'none'; 
      }
    });
  });

// //checkbox
// const mainCheckbox = document.querySelector('#horns');
// const mailCheckboxes = document.querySelectorAll('.gmail-project__coverage-main-mail-check');

// mainCheckbox.addEventListener('change', (event) => {
//     const isChecked = event.target.checked;

//     mailCheckboxes.forEach(checkbox => {
//         checkbox.checked = isChecked;
//     });
// });












