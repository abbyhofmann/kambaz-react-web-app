import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const enroll = async (enrollment: any) => {
  const response = await axios.post(`${ENROLLMENTS_API}/enroll`, enrollment);
  return response.data;
};

export const unenroll = async (enrollment: any) => {
  const { user, course } = enrollment;
  const response = await axios.delete(
    `${ENROLLMENTS_API}/${user}/${course}`,
    enrollment
  );
  return response.data;
};

export const fetchAllEnrollments = async () => {
  const { data } = await axios.get(ENROLLMENTS_API);
  return data;
};
