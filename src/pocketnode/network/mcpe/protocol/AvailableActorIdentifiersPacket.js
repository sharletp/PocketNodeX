const DataPacket = require("./DataPacket");
const ProtocolInfo = require("../Info");

class AvailableActorIdentifiersPacket extends DataPacket {
    static getId() {
        return ProtocolInfo.AVAILABLE_ACTOR_IDENTIFIERS_PACKET;
    }

    static HARDCODED_NBT_BLOB() {
        return "CgAJBmlkbGlzdArOAQgDYmlkCm1pbmVjcmFmdDoBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQNbWluZWNyYWZ0Om5wYwMDcmlkhgQBCnN1bW1vbmFibGUAAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQNbWluZWNyYWZ0OmNvdwMDcmlkFgEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cBCAJpZBptaW5lY3JhZnQ6d2FuZGVyaW5nX3RyYWRlcgMDcmlk7AEBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQRbWluZWNyYWZ0OmJhbGxvb24DA3JpZNYBAQpzdW1tb25hYmxlAAAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwAIAmlkEm1pbmVjcmFmdDppY2VfYm9tYgMDcmlk1AEBCnN1bW1vbmFibGUAAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQObWluZWNyYWZ0Omh1c2sDA3JpZF4BCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQPbWluZWNyYWZ0OnN0cmF5AwNyaWRcAQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwEIAmlkD21pbmVjcmFmdDp3aXRjaAMDcmlkWgEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cACAJpZBltaW5lY3JhZnQ6em9tYmllX3ZpbGxhZ2VyAwNyaWRYAQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwEIAmlkD21pbmVjcmFmdDpibGF6ZQMDcmlkVgEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cBCAJpZBRtaW5lY3JhZnQ6bWFnbWFfY3ViZQMDcmlkVAEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cBCAJpZA9taW5lY3JhZnQ6Z2hhc3QDA3JpZFIBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQVbWluZWNyYWZ0OmNhdmVfc3BpZGVyAwNyaWRQAQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwEIAmlkFG1pbmVjcmFmdDpzaWx2ZXJmaXNoAwNyaWROAQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwEIAmlkEm1pbmVjcmFmdDplbmRlcm1hbgMDcmlkTAEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cBCAJpZA9taW5lY3JhZnQ6c2xpbWUDA3JpZEoBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQXbWluZWNyYWZ0OnpvbWJpZV9waWdtYW4DA3JpZEgBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQQbWluZWNyYWZ0OnNwaWRlcgMDcmlkRgEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cBCAJpZBJtaW5lY3JhZnQ6c2tlbGV0b24DA3JpZEQBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQRbWluZWNyYWZ0OmNyZWVwZXIDA3JpZEIBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQQbWluZWNyYWZ0OnpvbWJpZQMDcmlkQAEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cBCAJpZBhtaW5lY3JhZnQ6c2tlbGV0b25faG9yc2UDA3JpZDQBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQObWluZWNyYWZ0Om11bGUDA3JpZDIBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQQbWluZWNyYWZ0OmRvbmtleQMDcmlkMAEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cBCAJpZBFtaW5lY3JhZnQ6ZG9scGhpbgMDcmlkPgEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cBCAJpZBZtaW5lY3JhZnQ6em9tYmllX2hvcnNlAwNyaWQ2AQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwEIAmlkEG1pbmVjcmFmdDp0dXJ0bGUDA3JpZJQBAQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwEIAmlkE21pbmVjcmFmdDptb29zaHJvb20DA3JpZCABCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQPbWluZWNyYWZ0OnBhbmRhAwNyaWTiAQEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cBCAJpZA9taW5lY3JhZnQ6aG9yc2UDA3JpZC4BCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQQbWluZWNyYWZ0OnNhbG1vbgMDcmlk2gEBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQNbWluZWNyYWZ0OnBpZwMDcmlkGAEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cACAJpZBJtaW5lY3JhZnQ6dmlsbGFnZXIDA3JpZB4BCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQNbWluZWNyYWZ0OmNvZAMDcmlk4AEBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQUbWluZWNyYWZ0OnB1ZmZlcmZpc2gDA3JpZNgBAQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwEIAmlkDm1pbmVjcmFmdDp3b2xmAwNyaWQcAQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwEIAmlkFm1pbmVjcmFmdDp0cm9waWNhbGZpc2gDA3JpZN4BAQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwEIAmlkD21pbmVjcmFmdDpzaGVlcAMDcmlkGgEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cBCAJpZBFtaW5lY3JhZnQ6ZHJvd25lZAMDcmlk3AEBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQRbWluZWNyYWZ0OmNoaWNrZW4DA3JpZBQBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQPbWluZWNyYWZ0OmxsYW1hAwNyaWQ6AQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwEIAmlkD21pbmVjcmFmdDpzcXVpZAMDcmlkIgEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cBCAJpZBJtaW5lY3JhZnQ6cGlsbGFnZXIDA3JpZOQBAQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwAIAmlkFG1pbmVjcmFmdDppcm9uX2dvbGVtAwNyaWQoAQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwEIAmlkEG1pbmVjcmFmdDpyYWJiaXQDA3JpZCQBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQVbWluZWNyYWZ0OnZpbGxhZ2VyX3YyAwNyaWTmAQEKc3VtbW9uYWJsZQAACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cACAJpZBRtaW5lY3JhZnQ6c25vd19nb2xlbQMDcmlkKgEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cBCAJpZA1taW5lY3JhZnQ6YmF0AwNyaWQmAQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwEIAmlkHG1pbmVjcmFmdDp6b21iaWVfdmlsbGFnZXJfdjIDA3JpZOgBAQpzdW1tb25hYmxlAAAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwEIAmlkEG1pbmVjcmFmdDpvY2Vsb3QDA3JpZCwBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQNbWluZWNyYWZ0OmNhdAMDcmlklgEBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQUbWluZWNyYWZ0OnBvbGFyX2JlYXIDA3JpZDgBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQQbWluZWNyYWZ0OnBhcnJvdAMDcmlkPAEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cBCAJpZBltaW5lY3JhZnQ6d2l0aGVyX3NrZWxldG9uAwNyaWRgAQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwEIAmlkEm1pbmVjcmFmdDpndWFyZGlhbgMDcmlkYgEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cBCAJpZBhtaW5lY3JhZnQ6ZWxkZXJfZ3VhcmRpYW4DA3JpZGQBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQUbWluZWNyYWZ0OnZpbmRpY2F0b3IDA3JpZHIBCnN1bW1vbmFibGUBAAgDYmlkCm1pbmVjcmFmdDoBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQQbWluZWNyYWZ0OnBsYXllcgMDcmlkggQBCnN1bW1vbmFibGUAAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQRbWluZWNyYWZ0OnBoYW50b20DA3JpZHQBCnN1bW1vbmFibGUBAAgDYmlkCm1pbmVjcmFmdDoBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQXbWluZWNyYWZ0OnRyaXBvZF9jYW1lcmEDA3JpZIQEAQpzdW1tb25hYmxlAAAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwEIAmlkEW1pbmVjcmFmdDpyYXZhZ2VyAwNyaWR2AQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwAIAmlkEG1pbmVjcmFmdDp3aXRoZXIDA3JpZGgBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQWbWluZWNyYWZ0OmVuZGVyX2RyYWdvbgMDcmlkagEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cBCAJpZBFtaW5lY3JhZnQ6c2h1bGtlcgMDcmlkbAEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cBCAJpZBNtaW5lY3JhZnQ6ZW5kZXJtaXRlAwNyaWRuAQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwAIAmlkEm1pbmVjcmFmdDptaW5lY2FydAMDcmlkqAEBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQZbWluZWNyYWZ0OmhvcHBlcl9taW5lY2FydAMDcmlkwAEBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQWbWluZWNyYWZ0OnRudF9taW5lY2FydAMDcmlkwgEBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQYbWluZWNyYWZ0OmNoZXN0X21pbmVjYXJ0AwNyaWTEAQEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cACAJpZCBtaW5lY3JhZnQ6Y29tbWFuZF9ibG9ja19taW5lY2FydAMDcmlkyAEBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQVbWluZWNyYWZ0OmFybW9yX3N0YW5kAwNyaWR6AQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwAIAmlkDm1pbmVjcmFmdDppdGVtAwNyaWSAAQEKc3VtbW9uYWJsZQAACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cACAJpZA1taW5lY3JhZnQ6dG50AwNyaWSCAQEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cACAJpZBdtaW5lY3JhZnQ6ZmFsbGluZ19ibG9jawMDcmlkhAEBCnN1bW1vbmFibGUAAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQTbWluZWNyYWZ0OnhwX2JvdHRsZQMDcmlkiAEBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQQbWluZWNyYWZ0OnhwX29yYgMDcmlkigEBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQdbWluZWNyYWZ0OmV5ZV9vZl9lbmRlcl9zaWduYWwDA3JpZIwBAQpzdW1tb25hYmxlAAAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwAIAmlkF21pbmVjcmFmdDplbmRlcl9jcnlzdGFsAwNyaWSOAQEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cACAJpZBhtaW5lY3JhZnQ6c2h1bGtlcl9idWxsZXQDA3JpZJgBAQpzdW1tb25hYmxlAAAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwAIAmlkFm1pbmVjcmFmdDpmaXNoaW5nX2hvb2sDA3JpZJoBAQpzdW1tb25hYmxlAAAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwAIAmlkGW1pbmVjcmFmdDpkcmFnb25fZmlyZWJhbGwDA3JpZJ4BAQpzdW1tb25hYmxlAAAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwAIAmlkD21pbmVjcmFmdDphcnJvdwMDcmlkoAEBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQSbWluZWNyYWZ0OnNub3diYWxsAwNyaWSiAQEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cACAJpZA1taW5lY3JhZnQ6ZWdnAwNyaWSkAQEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cACAJpZBJtaW5lY3JhZnQ6cGFpbnRpbmcDA3JpZKYBAQpzdW1tb25hYmxlAAAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwAIAmlkGG1pbmVjcmFmdDp0aHJvd25fdHJpZGVudAMDcmlkkgEBCnN1bW1vbmFibGUAAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQSbWluZWNyYWZ0OmZpcmViYWxsAwNyaWSqAQEKc3VtbW9uYWJsZQAACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cACAJpZBdtaW5lY3JhZnQ6c3BsYXNoX3BvdGlvbgMDcmlkrAEBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQVbWluZWNyYWZ0OmVuZGVyX3BlYXJsAwNyaWSuAQEKc3VtbW9uYWJsZQAACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cACAJpZBRtaW5lY3JhZnQ6bGVhc2hfa25vdAMDcmlksAEBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQWbWluZWNyYWZ0OndpdGhlcl9za3VsbAMDcmlksgEBCnN1bW1vbmFibGUAAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQgbWluZWNyYWZ0OndpdGhlcl9za3VsbF9kYW5nZXJvdXMDA3JpZLYBAQpzdW1tb25hYmxlAAAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwAIAmlkDm1pbmVjcmFmdDpib2F0AwNyaWS0AQEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cACAJpZBhtaW5lY3JhZnQ6bGlnaHRuaW5nX2JvbHQDA3JpZLoBAQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwAIAmlkGG1pbmVjcmFmdDpzbWFsbF9maXJlYmFsbAMDcmlkvAEBCnN1bW1vbmFibGUAAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQUbWluZWNyYWZ0OmxsYW1hX3NwaXQDA3JpZMwBAQpzdW1tb25hYmxlAAAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwAIAmlkG21pbmVjcmFmdDphcmVhX2VmZmVjdF9jbG91ZAMDcmlkvgEBCnN1bW1vbmFibGUAAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQabWluZWNyYWZ0OmxpbmdlcmluZ19wb3Rpb24DA3JpZMoBAQpzdW1tb25hYmxlAAAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwAIAmlkGm1pbmVjcmFmdDpmaXJld29ya3Nfcm9ja2V0AwNyaWSQAQEKc3VtbW9uYWJsZQEACANiaWQBOgEMZXhwZXJpbWVudGFsAAELaGFzc3Bhd25lZ2cACAJpZBhtaW5lY3JhZnQ6ZXZvY2F0aW9uX2ZhbmcDA3JpZM4BAQpzdW1tb25hYmxlAQAIA2JpZAE6AQxleHBlcmltZW50YWwAAQtoYXNzcGF3bmVnZwEIAmlkG21pbmVjcmFmdDpldm9jYXRpb25faWxsYWdlcgMDcmlk0AEBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAQgCaWQNbWluZWNyYWZ0OnZleAMDcmlk0gEBCnN1bW1vbmFibGUBAAgDYmlkAToBDGV4cGVyaW1lbnRhbAABC2hhc3NwYXduZWdnAAgCaWQPbWluZWNyYWZ0OmFnZW50AwNyaWRwAQpzdW1tb25hYmxlAAAA"
    }

    /** @type {string} */
    namedtag;

    _decodePayload() {
        this.namedtag = this.readRemaining();
    }

    _encodePayload() {
        this.append(this.namedtag || Buffer.from(AvailableActorIdentifiersPacket.HARDCODED_NBT_BLOB(), 'base64'));
    }

    handle(session) {
        return false;
    }
}

module.exports = AvailableActorIdentifiersPacket;