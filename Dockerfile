# Step 1: Use Node.js as the base image
FROM node:18-alpine

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the React application
RUN npm run build

# Step 7: Use a lightweight web server to serve static files
RUN npm install -g serve

# Step 8: Expose port 3000
EXPOSE 3000

# Step 9: Command to serve the application
CMD ["serve", "-s", "build", "-l", "3000"]
