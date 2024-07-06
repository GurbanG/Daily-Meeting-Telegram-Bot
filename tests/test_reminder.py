import pytest
import bot.reminder as rem

class TestReminder:
 
    def test_make_job_id(self): 
        # Test with meeting_topic_id 
        user_chat_id = 123456789 
        meeting_chat_id = 987654321 
        meeting_topic_id = 123 
        expected_id = "123456789_reminder_for_987654321_123" 
        assert rem.make_job_id(user_chat_id, meeting_chat_id, meeting_topic_id) == expected_id 

    def test_get_message_link(self):
        chat_id = 123456789
        message_id = 987654321
        thread_id = 100
        chat_type = 'supergroup'
        expected_link = 'https://t.me/c/56789/100/987654321'
        assert rem.get_message_link(chat_id=chat_id, message_id=message_id, thread_id=thread_id, chat_type=chat_type) == expected_link