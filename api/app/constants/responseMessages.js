export const RESPONSE_MESSAGES = {
  // Server App Listen
  SERVER_RUNNING: PORT => `Server is running on port: \t ${PORT}`,

  // API
  REQUEST_DETAILS: req => `${req.method} - ${req.hostname} - ${req.originalUrl}`,
  REQUEST_BODY: req => `Request Body: ${JSON.stringify(req.body)}`,
  REQUEST_ERROR: (err, req) => `Error on request ${req.method} ${req.url}: ${err.message}`,

  // 200 status codes
  RECORD_UPDATED_SUCCESSFULLY: (req, id) =>
    `${req.method} - Record with id: ${id} successfully updated`,
  RECORD_DELETED_SUCCESSFULLY: id => `Record with id: ${id} deleted successfully`,

  // 201 status codes
  RECORD_CREATED_SUCCESSFULLY: req => `${req.method} - Record created successfully`,

  // 400 status codes
  PROVIDE_DETAILS: "Missing Information:  Please provide details",
  PROVIDE_DETAILS_TO_UPDATE: "Please provide details to update",

  // 404 status codes
  API_NOT_FOUND: req => `${req.originalUrl} - 404 - Not Found`,
  NO_RECORDS_FOUND: "No records found",
  RECORD_NOT_FOUND: id => `Record with id: ${id} not found`,

  // 422 status codes
  VALIDATION_FAILED: "Validation failed",
  INVALID_ID_FORMAT: "Invalid ID format",
  EMAIL_PASSWORD_REQUIRED: "Email and password are required",
  EMAIL_EXISTS: "Email already exists",

  // 500 status codes
  INTERNAL_SERVER_ERROR: err => `Internal Server Error: ${err.message}`,
};
