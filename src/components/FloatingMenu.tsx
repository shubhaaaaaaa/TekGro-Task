import { Message as MessageIcon, Mail as MailIcon, Call as CallIcon, Contacts as ContactsIcon } from '@mui/icons-material';

const FloatingMenu = () => {
  return (
    <div className="absolute top-[450px] right-0 bg-transparent flex flex-col items-end space-y-10 z-[9999]">
      <div className="bg-[#1a75bb] py-1 px-2 text-white font-bold transform rotate-90 text-sm">
        Feedback
      </div>

      <div className="flex flex-col items-end space-y-2 p-1 bg-[#1a75bb]">
        <div className="p-1 cursor-pointer">
          <MessageIcon
            sx={{
              fontSize: '1rem',
              color: '#FFFFFF',
              '&:hover': {
                color: '#CCCCCC',
              },
            }}
          />
        </div>
        <div className="p-1 cursor-pointer">
          <MailIcon
            sx={{
              fontSize: '1rem',
              color: '#FFFFFF',
              '&:hover': {
                color: '#CCCCCC',
              },
            }}
          />
        </div>
        <div className="p-1 cursor-pointer">
          <CallIcon
            sx={{
              fontSize: '1rem',
              color: '#FFFFFF',
              '&:hover': {
                color: '#CCCCCC',
              },
            }}
          />
        </div>
        <div className="p-1 cursor-pointer">
          <ContactsIcon
            sx={{
              fontSize: '1rem',
              color: '#FFFFFF',
              '&:hover': {
                color: '#CCCCCC',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FloatingMenu;
