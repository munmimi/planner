import React from 'react';

const DeleteModal = ({delActive}) => {
  return (
    <div className={delActive ? "calendar-modal calendar-modal_delete is-active":"calendar-modal calendar-modal_delete" }>
      <h2>삭제하시겠습니까?</h2>
      <button>YES</button>
      <button>NO</button>
    </div>
  );
};

export default DeleteModal;