import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import {
  DeleteNoteAtom,
  SendNoteModalAtom,
  idAtom,
  sendNoteIdAtom,
} from "../../Recoil/State";
import api from "../../apis/Api";
import { NoteContainer, SendContainer } from "./NoteStyle";
import { ReceivedNotesRes } from "../../apis/Response/Response";
import { RequestNoteBody } from "./NoteComponent/NoteBody";
import { RecentNoteModal } from "../User/ForgotIdPw/ForgotIdStyles";
import { DeleteNoteModal } from "./Modal/DeleteNoteModal";
import { CheckSogaeNoteModal } from "./Modal/AcceptModal";

const RequestNote = () => {
  const [userId, setId] = useRecoilState(idAtom);
  const [DeleteOpen, setDeleteOpen] = useRecoilState(DeleteNoteAtom);
  const [noteId, setNoteId] = useRecoilState(sendNoteIdAtom);
  const handleRemove = (NoteId: number) => {
    setNoteId(NoteId);
    console.log(NoteId);
    setDeleteOpen(true);
  };

  const handleCheck = () => {
    // Check 로직 구현
  };
  // React Query 사용
  const {
    data: receivedNoteList,
    isLoading,
    isError,
  } = useQuery<ReceivedNotesRes[]>(["receivedNote"], async () => {
    const response = await api.get(`note/sent/${userId}`);
    console.log(response);
    return response.data.data;
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred while fetching data</p>;
  }

  return (
    <SendContainer>
      {receivedNoteList.map((note, index) => (
        <RequestNoteBody
          key={index}
          comment="보낸 쪽지"
          To={note.receiverName}
          Title={note.subject}
          Note={note.content}
          Remove={() => handleRemove(note.id)}
        />
      ))}

      <DeleteNoteModal />
    </SendContainer>
  );
};

export default RequestNote;
