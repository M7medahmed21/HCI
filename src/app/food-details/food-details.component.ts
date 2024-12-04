import { Component } from '@angular/core';

@Component({
  selector: 'food-details',
  standalone:true,
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css'],
})
export class FoodDetailsComponent {}


document.addEventListener("DOMContentLoaded", () => {
  const thumbnail1 = document.getElementById("thumbnail-1");


  const galleryButtons = document.querySelectorAll(".gallery-button");
  const ratingStars = document.querySelectorAll(".rating-star");

  // Hide thumbnail
  thumbnail1?.addEventListener("click", () => {
    thumbnail1.style.display = "none";
  });

  // Load more ingredients


  // Add new comment
  const addCommentButton = document.querySelector("#add-comment");
  const commentInput = document.querySelector("#comment-input") as HTMLInputElement;

  const addComment = () => {
    const commentText = commentInput.value.trim();

    if (commentText) {
      // Create the comment card
      const commentCard = document.createElement("article");
      commentCard.style.borderRadius = "32px 32px 32px 0";
      commentCard.style.backgroundColor = "#fff";
      commentCard.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.2)";
      commentCard.style.display = "flex";
      commentCard.style.padding = "22px 24px";
      commentCard.style.marginTop = "22px";
      commentCard.style.alignItems = "center";
      commentCard.style.gap = "20px";
      commentCard.style.height = "50px";

      // Create the avatar
      const avatar = document.createElement("img");
      avatar.className = "user-avatar";
      avatar.src = "https://cdn.builder.io/api/v1/image/assets/TEMP/31963e3db7346b2545b867028e54aac88a92ebeb7841c0c3093fd29d9d78d9ad?placeholderIfAbsent=true&apiKey=1f1356d0c2574f82958771cd44481ea0";
      avatar.alt = "User avatar";
      avatar.style.aspectRatio = "1";
      avatar.style.width = "50px"; // Avatar width
      avatar.style.height = "50px"; // Avatar height
      avatar.style.objectFit = "cover"; // To ensure the avatar is properly cropped

      // Create the comment content container
      const commentContent = document.createElement("div");
      commentContent.className = "comment-content";
      commentContent.style.display = "flex";
      commentContent.style.flexDirection = "column";
      commentContent.style.flexGrow = "1";

      // Create the comment header
      const commentHeader = document.createElement("div");
      commentHeader.className = "comment-header";
      commentHeader.style.display = "flex";
      commentHeader.style.alignItems = "center";
      commentHeader.style.gap = "8px";

      // Add user name
      const userName = document.createElement("span");
      userName.className = "user-name";
      userName.textContent = "New User";
      userName.style.color = "#191919";
      userName.style.fontWeight = "500";
      userName.style.paddingTop = "5px";
      userName.style.fontSize = "26px"; // Font size for username

      // Add comment time
      const commentTime = document.createElement("span");
      commentTime.className = "comment-time";
      commentTime.textContent = "just now";
      commentTime.style.color = "rgba(25, 25, 25, 0.4)";
      commentTime.style.fontWeight = "400";
      commentTime.style.paddingTop = "5px";
      commentTime.style.fontSize = "24px"; // Font size for comment time

      // Add the user name and comment time to the header
      commentHeader.appendChild(userName);
      commentHeader.appendChild(commentTime);

      // Add a line break between user name and comment time (optional)
      commentHeader.appendChild(document.createElement("br"));

      // Create the comment text
      const commentTextElement = document.createElement("p");
      commentTextElement.className = "comment-text";
      commentTextElement.textContent = commentText;
      commentTextElement.style.color = "#191919";
      commentTextElement.style.fontWeight = "400";
      commentTextElement.style.marginTop = "6px";
      commentTextElement.style.fontSize = "28px"; // Adjust text size for readability

      // Add a line break between the comment header and the comment text (optional)
      commentContent.appendChild(document.createElement("br"));
      commentContent.appendChild(commentHeader);
      commentContent.appendChild(commentTextElement);

      // Append avatar and comment content to the comment card
      commentCard.appendChild(avatar);
      commentCard.appendChild(commentContent);

      // Append the new comment to the comments section at the top
      const commentsSection = document.querySelector(".comments-section");
      commentsSection?.insertBefore(commentCard, commentsSection.firstChild);

      // Clear the input field
      commentInput.value = "";
    }
  };



// Event listener for Enter key
commentInput?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addComment();
  }
});

// Event listener for click (optional)
addCommentButton?.addEventListener("click", addComment);


 // Event listener for Enter key
 commentInput?.addEventListener("keydown", (event) => {
   if (event.key === "Enter") {
     addComment();
   }
 });

 // Event listener for click (optional)
 addCommentButton?.addEventListener("click", addComment);

// Event listener for Enter key
commentInput?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addComment();
  }
});

// Event listener for click (optional)
addCommentButton?.addEventListener("click", addComment);



  // Gallery button counter
  galleryButtons.forEach((button) => {
    let count = 0;
    button.addEventListener("click", () => {
      count++;
      console.log(`Button pressed ${count} times`);
    });
  });

  // Rating functionality
  ratingStars.forEach((star, index) => {
    star.addEventListener("click", () => {
      ratingStars.forEach((s, i) => {
        s.classList.toggle("filled", i <= index);
      });
    });
  });
});

