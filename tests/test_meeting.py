from bot.meeting import make_job_id

def test_make_job_id():
    chat_id = 12345
    topic_id = 54321
    expected_id = '12345_54321_meeting'
    assert make_job_id(chat_id, topic_id) == expected_id